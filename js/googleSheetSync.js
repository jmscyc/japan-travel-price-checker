// Google Sheet 雲端同步管理模組
const GoogleSheetSync = {
  storageKey: "travel_gsheet_webapp_url",
  autoSyncKey: "travel_gsheet_auto_sync",
  pinKey: "travel_gsheet_pin",
  isSyncing: false,

  init() {
    this.checkUrlParamsForSync();
    this.updateStatusBadge();
  },

  // 檢查網址參數是否帶有金鑰或同步碼 (例如 ?key=888 或 ?sync=...)
  checkUrlParamsForSync() {
    try {
      if (typeof window === "undefined" || !window.location || !window.location.search) return;
      const urlParams = new URLSearchParams(window.location.search);
      const pinParam = urlParams.get("key") || urlParams.get("pin");
      const syncParam = urlParams.get("sync");

      // 1. 若網址帶有金鑰 key=888
      if (pinParam) {
        this.applyPinCode(pinParam, true);
        return;
      }

      // 2. 若網址帶有 Base64 編碼的 Web App URL
      if (syncParam) {
        const decodedUrl = decodeURIComponent(atob(syncParam));
        if (decodedUrl && decodedUrl.startsWith("http")) {
          this.setWebAppUrl(decodedUrl);
          this.setAutoSync(true);
          // 清除網址參數，保持網址整潔
          window.history.replaceState({}, document.title, window.location.pathname);
          setTimeout(() => {
            alert("🎉 偵測到一鍵同步連結！已自動完成 Google Sheet 連線綁定！");
            this.downloadFromGoogleSheet(true); // 自動從雲端拉取最新資料
          }, 500);
        }
      }
    } catch (e) {
      console.warn("解析同步網址失敗:", e);
    }
  },

  // 取得儲存的 PIN 碼
  getPinCode() {
    return localStorage.getItem(this.pinKey) || "888";
  },

  // 套用 PIN 碼
  applyPinCode(pin, fromUrl = false) {
    const cleanPin = (pin || "").trim();
    localStorage.setItem(this.pinKey, cleanPin);

    // 如果是使用者的 888 金鑰，而且尚未設定過自訂網址，自動關聯預設/上次儲存的連線
    if (cleanPin === "888") {
      const currentUrl = this.getWebAppUrl();
      if (!currentUrl) {
        // 如果 localStorage 中有歷史快取或旅伴同步紀錄
        const cachedUrl = localStorage.getItem("travel_gsheet_last_known_url");
        if (cachedUrl) {
          this.setWebAppUrl(cachedUrl);
        }
      }
      if (fromUrl) {
        window.history.replaceState({}, document.title, window.location.pathname);
        setTimeout(() => {
          alert("🎉 成功啟用【888 專屬金鑰】！已自動解鎖 Google Sheet 跨裝置連線！");
        }, 500);
      }
    }
    this.updateStatusBadge();
  },

  // 取得儲存的 Web App 網址
  getWebAppUrl() {
    return localStorage.getItem(this.storageKey) || "";
  },

  // 儲存 Web App 網址
  setWebAppUrl(url) {
    if (url) {
      localStorage.setItem(this.storageKey, url.trim());
      localStorage.setItem("travel_gsheet_last_known_url", url.trim());
    } else {
      localStorage.removeItem(this.storageKey);
    }
    this.updateStatusBadge();
  },

  // 是否開啟自動同步
  isAutoSyncEnabled() {
    return localStorage.getItem(this.autoSyncKey) === "true";
  },

  // 切換自動同步開關
  setAutoSync(enabled) {
    localStorage.setItem(this.autoSyncKey, enabled ? "true" : "false");
  },

  // 更新頂部/面板的連線狀態標籤
  updateStatusBadge() {
    const url = this.getWebAppUrl();
    const badge = document.getElementById("gsheet-status-badge");
    const indicator = document.getElementById("header-gsheet-indicator");
    
    if (url) {
      if (badge) {
        badge.textContent = "已連線 Google Sheet";
        badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-2xs";
      }
      if (indicator) {
        indicator.textContent = "☁️ 雲端已連線";
        indicator.className = "text-[10px] text-emerald-200 font-semibold hover:underline flex items-center gap-0.5";
      }
    } else {
      if (badge) {
        badge.textContent = "未綁定 Google Sheet";
        badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-600";
      }
      if (indicator) {
        indicator.textContent = "☁️ 綁定 Sheet";
        indicator.className = "text-[10px] text-indigo-200 font-normal hover:underline flex items-center gap-0.5";
      }
    }
  },

  // 將當前所有比價資料轉換為漂亮的試算表列資料
  formatDataForSheet() {
    const records = DomesticDrugComparator.records || [];
    const rate = CurrencyManager.getRate();

    // 格式化總表明細 (每間店一行)
    const rows = [];
    records.forEach(prod => {
      if (!prod.stores || prod.stores.length === 0) {
        rows.push({
          productName: prod.name,
          barcode: prod.barcode || "-",
          storeName: "(尚無紀錄)",
          priceJpy: 0,
          isTaxIncluded: "未稅",
          netPriceJpy: 0,
          priceTwd: 0,
          note: "-",
          updatedAt: new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" })
        });
      } else {
        prod.stores.forEach(s => {
          const netPrice = s.isTaxIncluded ? Math.round(s.price / 1.1) : s.price;
          const twd = Math.round(netPrice * rate);
          rows.push({
            productName: prod.name,
            barcode: prod.barcode || "-",
            storeName: s.storeName,
            priceJpy: s.price,
            isTaxIncluded: s.isTaxIncluded ? "含稅" : "未稅",
            netPriceJpy: netPrice,
            priceTwd: twd,
            note: s.note || "-",
            updatedAt: s.updatedAt || new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" })
          });
        });
      }
    });

    return {
      exchangeRate: rate,
      updatedAt: new Date().toISOString(),
      rows: rows,
      rawRecords: records
    };
  },

  // 備份上傳至 Google Sheet
  async uploadToGoogleSheet(isSilent = false) {
    const url = this.getWebAppUrl();
    if (!url) {
      if (!isSilent) alert("請先設定您的 Google Apps Script Web App 網址！");
      this.openModal();
      return false;
    }

    if (this.isSyncing) return false;
    this.isSyncing = true;

    try {
      const payload = this.formatDataForSheet();
      
      // 使用 fetch POST 發送至 Google Apps Script
      // mode: 'no-cors' 避免 Google 重新導向造成 CORS 誤報
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          action: "sync",
          payload: payload
        })
      });

      this.isSyncing = false;
      const lastSyncEl = document.getElementById("gsheet-last-sync-time");
      const timeStr = new Date().toLocaleTimeString("zh-TW");
      if (lastSyncEl) lastSyncEl.textContent = `最後同步：${timeStr}`;

      if (!isSilent) {
        alert("🎉 成功同步至 Google Sheet！\n所有商品、店家價格與最後更新時間皆已寫入試算表！");
      }
      return true;
    } catch (err) {
      this.isSyncing = false;
      console.error("同步失敗:", err);
      if (!isSilent) {
        alert("⚠️ 同步至 Google Sheet 失敗，請確認網路連線與 Web App 網址是否正確: " + err.message);
      }
      return false;
    }
  },

  // 從 Google Sheet 下載資料
  async downloadFromGoogleSheet() {
    const url = this.getWebAppUrl();
    if (!url) {
      alert("請先設定您的 Google Apps Script Web App 網址！");
      this.openModal();
      return false;
    }

    const mode = confirm("點擊「確定」將【合併現有資料】；點擊「取消」將【以雲端資料完全覆蓋】。請選擇？");

    try {
      const queryUrl = url.includes("?") ? `${url}&action=getRaw` : `${url}?action=getRaw`;
      const response = await fetch(queryUrl);
      if (!response.ok) {
        throw new Error(`HTTP 錯誤碼: ${response.status}`);
      }
      const data = await response.json();

      if (data && data.rawRecords && Array.isArray(data.rawRecords)) {
        if (mode) {
          // 合併模式
          data.rawRecords.forEach(newItem => {
            const existing = DomesticDrugComparator.records.find(r => (r.barcode && r.barcode === newItem.barcode) || r.name === newItem.name);
            if (existing) {
              newItem.stores.forEach(s => {
                const storeExists = existing.stores.some(es => es.storeName === s.storeName && es.price === s.price);
                if (!storeExists) {
                  existing.stores.push(s);
                }
              });
            } else {
              DomesticDrugComparator.records.push(newItem);
            }
          });
        } else {
          // 完全覆蓋模式
          DomesticDrugComparator.records = data.rawRecords;
        }

        DomesticDrugComparator.saveRecords();
        DomesticDrugComparator.renderProductsList();
        if (DomesticDrugComparator.records.length > 0) {
          DomesticDrugComparator.selectProduct(DomesticDrugComparator.records[0].id);
        }
        alert(`🎉 成功從 Google Sheet 載入 ${data.rawRecords.length} 項商品資料！`);
        return true;
      } else {
        alert("⚠️ 試算表中尚無有效的備份資料，請先在手機進行一次「備份至 Google Sheet」。");
        return false;
      }
    } catch (err) {
      console.error("下載失敗:", err);
      alert("⚠️ 下載失敗，請確認發布權限為「任何人 (Anyone)」且網址正確: " + err.message);
      return false;
    }
  },

  // 觸發自動同步 (當新增店家價格時調用)
  triggerAutoSync() {
    if (this.isAutoSyncEnabled() && this.getWebAppUrl()) {
      this.uploadToGoogleSheet(true);
    }
  },

  // 開啟設定彈窗
  openModal() {
    const modal = document.getElementById("gsheet-modal");
    if (!modal) return;
    const input = document.getElementById("gsheet-url-input");
    const autoCheck = document.getElementById("gsheet-auto-sync-check");
    const pinInput = document.getElementById("gsheet-pin-input");

    if (input) input.value = this.getWebAppUrl();
    if (autoCheck) autoCheck.checked = this.isAutoSyncEnabled();
    if (pinInput) pinInput.value = this.getPinCode();

    modal.classList.remove("hidden");
  },

  // 關閉彈窗
  closeModal() {
    const modal = document.getElementById("gsheet-modal");
    if (modal) modal.classList.add("hidden");
  },

  // 儲存設定
  saveSettings() {
    const input = document.getElementById("gsheet-url-input");
    const autoCheck = document.getElementById("gsheet-auto-sync-check");
    const pinInput = document.getElementById("gsheet-pin-input");

    if (input) {
      this.setWebAppUrl(input.value);
    }
    if (autoCheck) {
      this.setAutoSync(autoCheck.checked);
    }
    if (pinInput) {
      this.applyPinCode(pinInput.value);
    }
    this.closeModal();
    alert("✅ Google Sheet 設定已成功儲存！");
  },

  // 一鍵產生並複製「換裝置秒同步專屬連結」
  copyShareSyncLink() {
    const url = this.getWebAppUrl();
    if (!url) {
      alert("請先輸入並儲存您的 Google Web App 網址，才能產生專屬同步連結！");
      return;
    }

    // 將 Web App URL 編碼至網址參數
    const encoded = btoa(encodeURIComponent(url));
    const shareUrl = `${window.location.origin}${window.location.pathname}?sync=${encoded}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("🎉 專屬同步網址已複製到剪貼簿！\n\n換任何手機、iPad 或傳給旅伴，點開此連結就能【0 設定自動完成同步】！");
      }).catch(() => {
        prompt("請複製以下專屬秒同步網址傳至其他裝置：", shareUrl);
      });
    } else {
      prompt("請複製以下專屬秒同步網址傳至其他裝置：", shareUrl);
    }
  },

  // 複製「888 金鑰直通網址」
  copyPinLink() {
    const pin = this.getPinCode() || "888";
    const pinUrl = `${window.location.origin}${window.location.pathname}?key=${pin}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pinUrl).then(() => {
        alert(`🎉 專屬【金鑰=${pin} 直通網址】已複製到剪貼簿！\n\n新裝置點開此連結，會自動辨識並載入您的金鑰！`);
      }).catch(() => {
        prompt("請複製以下金鑰網址：", pinUrl);
      });
    } else {
      prompt("請複製以下金鑰網址：", pinUrl);
    }
  },

  // 一鍵複製 Apps Script 範本程式碼
  copyScriptTemplate() {
    const script = `/**
 * 出國血拚比價助手 - Google Sheet 專用同步腳本
 * 1. 請至 Google 試算表 ➔ 點擊選單「擴充功能」➔「Apps Script」
 * 2. 清空既有內容，將這段代碼完整貼上
 * 3. 點擊右上角「部署」➔「新增部署作業」➔ 類型選擇「網頁應用程式 (Web App)」
 * 4. 執行身分選擇「我」，誰可以存取選擇「任何人 (Anyone)」➔ 點擊「部署」
 * 5. 複製生成的「網頁應用程式網址 (Web App URL)」貼回比價助手即可！
 */

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var rawSheet = ss.getSheetByName("_RawData");
  var rawJson = rawSheet ? rawSheet.getRange(1, 1).getValue() : "{}";
  
  return ContentService.createTextOutput(rawJson)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var payload = data.payload || {};
    var rows = payload.rows || [];
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. 寫入清晰的「藥妝比價總表」
    var sheetName = "藥妝比價總表";
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    sheet.clear();

    // 標題列
    var headers = ["商品名稱", "條碼", "比價店家", "日幣標價", "稅制", "未稅等效", "折合台幣(約)", "貨架備註", "更新時間"];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#4f46e5").setFontColor("#ffffff");

    // 資料列
    if (rows.length > 0) {
      var sheetData = rows.map(function(r) {
        return [
          r.productName,
          r.barcode,
          r.storeName,
          r.priceJpy,
          r.isTaxIncluded,
          r.netPriceJpy,
          r.priceTwd,
          r.note,
          r.updatedAt
        ];
      });
      sheet.getRange(2, 1, sheetData.length, headers.length).setValues(sheetData);
    }

    sheet.autoResizeColumns(1, headers.length);

    // 2. 寫入無損備份工作表
    var rawSheet = ss.getSheetByName("_RawData");
    if (!rawSheet) {
      rawSheet = ss.insertSheet("_RawData");
    }
    rawSheet.clear();
    rawSheet.getRange(1, 1).setValue(JSON.stringify(payload));

    return ContentService.createTextOutput(JSON.stringify({ status: "success", count: rows.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(script).then(() => {
        alert("📋 Google Apps Script 腳本已複製到剪貼簿！\n請至您的 Google Sheet 擴充功能中貼上並發布即可！");
      }).catch(() => {
        prompt("請按 Ctrl+C 複製以下腳本：", script);
      });
    } else {
      prompt("請按 Ctrl+C 複製以下腳本：", script);
    }
  }
};

window.GoogleSheetSync = GoogleSheetSync;
