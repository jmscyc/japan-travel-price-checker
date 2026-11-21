// 預置熱門商品資料庫與條碼對照表
window.SAMPLE_PRODUCTS = [
  // UNIQLO
  {
    barcode: "2000171234567",
    code: "464024",
    brand: "UNIQLO",
    name: "特級極輕羽絨外套 (男女適穿)",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=400&q=80",
    category: "clothing",
    jpPrice: 6990,
    twPrice: 2490,
    jpCampaign: "感謝祭限定折價 1,000 円",
    jpDiscountPrice: 5990,
    twCampaign: "無特價",
    twDiscountPrice: 2490,
    twSearchUrl: "https://www.uniqlo.com/tw/zh_TW/search.html?description=",
    jpSearchUrl: "https://www.uniqlo.com/jp/ja/search?q="
  },
  {
    barcode: "2000189876543",
    code: "450181",
    brand: "UNIQLO",
    name: "HEATTECH 吸濕發熱衣 (長袖)",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
    category: "clothing",
    jpPrice: 1290,
    twPrice: 590,
    jpCampaign: "限定優惠 2件折 300 円",
    jpDiscountPrice: 990,
    twCampaign: "單件特惠",
    twDiscountPrice: 490,
    twSearchUrl: "https://www.uniqlo.com/tw/zh_TW/search.html?description=",
    jpSearchUrl: "https://www.uniqlo.com/jp/ja/search?q="
  },
  // 無印良品 MUJI
  {
    barcode: "4550182200011",
    code: "G9AA001",
    brand: "MUJI",
    name: "超音波芬香噴霧器 (大)",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80",
    category: "living",
    jpPrice: 6890,
    twPrice: 2590,
    jpCampaign: "無印良品週間 10% OFF",
    jpDiscountPrice: 6201,
    twCampaign: "無特惠",
    twDiscountPrice: 2590,
    twSearchUrl: "https://www.muji.com/tw/products/cmdty/detail/",
    jpSearchUrl: "https://www.muji.com/jp/ja/store/search/cmdty/"
  },
  {
    barcode: "4550002422000",
    code: "M89211",
    brand: "MUJI",
    name: "敏感肌化妝水 (保濕型 400ml)",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    category: "skincare",
    jpPrice: 1190,
    twPrice: 380,
    jpCampaign: "無印良品週間 10% OFF",
    jpDiscountPrice: 1071,
    twCampaign: "任兩件 9 折",
    twDiscountPrice: 342,
    twSearchUrl: "https://www.muji.com/tw/products/cmdty/detail/",
    jpSearchUrl: "https://www.muji.com/jp/ja/store/search/cmdty/"
  },
  // 宜得利 NITORI
  {
    barcode: "4992831200019",
    code: "N-78901",
    brand: "NITORI",
    name: "N-Cool 涼感被 (雙人加大)",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80",
    category: "living",
    jpPrice: 4990,
    twPrice: 1490,
    jpCampaign: "夏末特惠滿千折百",
    jpDiscountPrice: 4490,
    twCampaign: "無特惠",
    twDiscountPrice: 1490,
    twSearchUrl: "https://www.nitori-net.tw/search?q=",
    jpSearchUrl: "https://www.nitori-net.jp/ec/search/?q="
  },
  // 藥妝熱門商品 (常見於唐吉訶德/松本清/大國)
  {
    barcode: "4987123145167",
    code: "AL-270",
    brand: "武田",
    name: "合利他命 EX PLUS 270錠 (アリナミンEX PLUS)",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    category: "medicine",
    jpPrice: 5680,
    twPrice: 2000,
    jpCampaign: "各藥妝店常有促銷或限購2罐特惠",
    jpDiscountPrice: 4980,
    twCampaign: "台灣醫藥品售價約 NT$1,900~2,200",
    twDiscountPrice: 1950,
    twSearchUrl: "https://www.google.com/search?q=%E5%90%88%E5%88%A9%E4%BB%96%E5%91%BD+EX+PLUS+270%E9%89%88+%E5%83%B9%E6%A0%BC",
    jpSearchUrl: "https://www.google.com/search?q=%E3%82%A2%E3%83%AA%E3%83%8A%E3%83%9F%E3%83%B3EX+PLUS+270%E9%8C%A0+%E4%BE%A1%E6%A0%BC"
  },
  {
    barcode: "4987300052717",
    code: "EVE-A",
    brand: "白兔牌",
    name: "EVE 止痛藥 EVE QUICK DX 40錠",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80",
    category: "medicine",
    jpPrice: 1780,
    twPrice: 650,
    jpCampaign: "松本清持券常享 95 折",
    jpDiscountPrice: 1580,
    twCampaign: "代購或藥局參考價",
    twDiscountPrice: 650,
    twSearchUrl: "https://www.google.com/search?q=EVE+QUICK+DX+40%E9%8C%A0",
    jpSearchUrl: "https://www.google.com/search?q=EVE+QUICK+DX+40%E9%8C%A0+%E4%BE%A1%E6%A0%BC"
  },
  {
    barcode: "4903301138884",
    code: "LION-PAIR",
    brand: "獅王 LION",
    name: "PAIR 痘痘藥膏 (24g)",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
    category: "medicine",
    jpPrice: 1080,
    twPrice: 390,
    jpCampaign: "大國藥妝常態特惠價",
    jpDiscountPrice: 880,
    twCampaign: "代購參考價",
    twDiscountPrice: 380,
    twSearchUrl: "https://www.google.com/search?q=PAIR+%E7%97%98%E7%97%98%E8%97%A5+24g",
    jpSearchUrl: "https://www.google.com/search?q=%E3%83%9A%E3%82%A2%E3%82%A2%E3%82%AF%E3%83%8D%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0W+24g+%E4%BE%A1%E6%A0%BC"
  },
  {
    barcode: "4903301026457",
    code: "REST-LEG",
    brand: "獅王 LION",
    name: "休足時間 清涼舒緩貼片 (18枚入)",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80",
    category: "cosmetic",
    jpPrice: 698,
    twPrice: 299,
    jpCampaign: "唐吉訶德多盒促銷",
    jpDiscountPrice: 580,
    twCampaign: "屈臣氏兩件特惠",
    twDiscountPrice: 260,
    twSearchUrl: "https://www.google.com/search?q=%E4%BC%91%E8%B6%B3%E6%99%82%E9%96%93+18%E6%9E%9A",
    jpSearchUrl: "https://www.google.com/search?q=%E4%BC%91%E8%B6%B3%E6%99%82%E9%96%93+18%E6%9E%9A+%E4%BE%A1%E6%A0%BC"
  }
];

// 日本各大藥妝店即時優惠券與活動情報 (可隨時更新)
window.DRUGSTORE_COUPONS = [
  {
    store: "唐吉訶德 (驚安殿堂)",
    badge: "免稅 10% + 最高折 5%",
    desc: "含稅滿 10,000 日圓享免稅 10% + 額外折 5% 電子券",
    validDate: "長期有效",
    url: "https://japan-travel.donki.com/zh-tw/coupon/",
    bgColor: "from-yellow-400 to-amber-500",
    tag: "滿 1萬円折 5%"
  },
  {
    store: "松本清 (Matsukiyo)",
    badge: "免稅 10% + 額外最高折 7%",
    desc: "滿 1萬折 3%、滿 3萬折 5%、滿 5萬折 7% (需出示官方條碼)",
    validDate: "長期有效",
    url: "https://www.matsukiyo.co.jp/",
    bgColor: "from-blue-500 to-indigo-600",
    tag: "滿 5萬円折 7%"
  },
  {
    store: "大國藥妝 (Daikoku)",
    badge: "免稅 10% + 滿額加碼折 3~8%",
    desc: "常態免稅並提供店內中文店員優惠折扣，單價通常最具競爭力",
    validDate: "長期有效",
    url: "https://daikokudrug.com/",
    bgColor: "from-red-500 to-rose-600",
    tag: "免稅+常態滿額特惠"
  },
  {
    store: "Sundrug (尚都樂客)",
    badge: "免稅 10% + 額外折 3~7%",
    desc: "滿 1萬折 3%、滿 3萬折 5%、滿 5萬折 7%",
    validDate: "長期有效",
    url: "https://sundrug-online.com/",
    bgColor: "from-red-600 to-orange-500",
    tag: "滿 3萬円折 5%"
  },
  {
    store: "Bic Camera (必客)",
    badge: "免稅 10% + 藥妝折 5% / 電器折 7%",
    desc: "出示外國人專屬優惠券，化妝品藥妝額外折 5%，電器 7%",
    validDate: "長期有效",
    url: "https://www.biccamera.com/",
    bgColor: "from-emerald-500 to-teal-600",
    tag: "藥妝 5% / 電器 7%"
  }
];
// 匯率管理與計算工具
const CurrencyManager = {
  DEFAULT_RATE: 0.215, // 1 JPY = 0.215 TWD
  STORAGE_KEY: "travel_price_rate",

  getRate() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved && !isNaN(parseFloat(saved))) {
      return parseFloat(saved);
    }
    return this.DEFAULT_RATE;
  },

  setRate(rate) {
    const val = parseFloat(rate);
    if (!isNaN(val) && val > 0) {
      localStorage.setItem(this.STORAGE_KEY, val);
      return val;
    }
    return this.DEFAULT_RATE;
  },

  async fetchLiveRate() {
    try {
      // 透過公開免費 API 獲取即時日圓對台幣匯率
      const res = await fetch("https://open.er-api.com/v6/latest/JPY");
      if (res.ok) {
        const data = await res.json();
        if (data && data.rates && data.rates.TWD) {
          const rate = parseFloat(data.rates.TWD.toFixed(4));
          this.setRate(rate);
          return rate;
        }
      }
    } catch (e) {
      console.warn("無法取得即時匯率，使用本機儲存或預設值", e);
    }
    return this.getRate();
  },

  jpyToTwd(jpy, rate = null) {
    const r = rate !== null ? rate : this.getRate();
    return Math.round(jpy * r);
  }
};

window.CurrencyManager = CurrencyManager;
// Google Sheet 雲端同步管理模組
const GoogleSheetSync = {
  storageKey: "travel_gsheet_webapp_url",
  autoSyncKey: "travel_gsheet_auto_sync",
  isSyncing: false,

  init() {
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

    if (input) input.value = this.getWebAppUrl();
    if (autoCheck) autoCheck.checked = this.isAutoSyncEnabled();

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
    if (input) {
      this.setWebAppUrl(input.value);
    }
    if (autoCheck) {
      this.setAutoSync(autoCheck.checked);
    }
    this.closeModal();
    alert("✅ Google Sheet 設定已成功儲存！");
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
// 相機條碼掃描管理 (基於 html5-qrcode)
const BarcodeScannerManager = {
  html5QrCode: null,
  isScanning: false,

  init() {
    // 監聽掃描 Modal 開關
    const openBtn = document.getElementById("btn-open-scanner");
    const closeBtn = document.getElementById("btn-close-scanner");
    const modal = document.getElementById("scanner-modal");

    if (openBtn) {
      openBtn.addEventListener("click", () => this.startScan());
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.stopScan());
    }

    // 手動條碼輸入確認按鈕
    const manualBtn = document.getElementById("btn-manual-barcode-submit");
    if (manualBtn) {
      manualBtn.addEventListener("click", () => {
        const input = document.getElementById("manual-barcode-input");
        const code = input.value.trim();
        if (code) {
          this.onBarcodeDetected(code);
          input.value = "";
        }
      });
    }
  },

  async startScan() {
    const modal = document.getElementById("scanner-modal");
    modal.classList.remove("hidden");

    try {
      if (!this.html5QrCode) {
        this.html5QrCode = new Html5Qrcode("reader");
      }

      const config = {
        fps: 10,
        qrbox: { width: 260, height: 180 },
        aspectRatio: 1.0,
        experimentalFeatures: {
          useBarCodeDetectorIfSupported: true
        }
      };

      this.isScanning = true;
      await this.html5QrCode.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          this.onBarcodeDetected(decodedText);
          this.stopScan();
        },
        (errorMessage) => {
          // 掃描中幀未識別，屬正常略過
        }
      );
    } catch (err) {
      console.error("相機啟動失敗或權限被拒絕:", err);
      const tip = document.getElementById("scanner-error-tip");
      if (tip) {
        tip.classList.remove("hidden");
        tip.textContent = "無法啟動鏡頭。請確認已授權相機權限，或直接在下方手動輸入條碼。";
      }
    }
  },

  async stopScan() {
    const modal = document.getElementById("scanner-modal");
    modal.classList.add("hidden");

    if (this.html5QrCode && this.isScanning) {
      try {
        await this.html5QrCode.stop();
      } catch (e) {
        console.warn("停止掃描異常:", e);
      }
      this.isScanning = false;
    }
  },

  // 當掃描到條碼（或手動輸入條碼）
  onBarcodeDetected(barcode) {
    // 震動反饋（手機支援的話）
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    // 判斷目前所在的 Tab 是「跨國比價」還是「日本藥妝比價」
    const currentTab = App.getCurrentTab();

    if (currentTab === "cross-border") {
      const lockedBrand = localStorage.getItem("travel_locked_brand_name") || "日本品牌";
      
      // 搜尋預置庫（若有鎖定品牌，優先搜尋該品牌的商品）
      let product = null;
      if (window.SAMPLE_PRODUCTS) {
        if (lockedBrand && lockedBrand !== "日本品牌") {
          product = window.SAMPLE_PRODUCTS.find(p => (p.barcode === barcode || p.code === barcode) && p.brand.toLowerCase().includes(lockedBrand.toLowerCase()));
        }
        if (!product) {
          product = window.SAMPLE_PRODUCTS.find(p => p.barcode === barcode || p.code === barcode);
        }
      }

      if (product) {
        CrossBorderComparator.loadProduct(product);
      } else {
        // 未在預置庫中，以使用者鎖定的品牌建立即時項目
        const customProd = {
          barcode: barcode,
          name: `${lockedBrand} 商品 (${barcode})`,
          brand: lockedBrand,
          image: "https://placehold.co/400x400?text=" + encodeURIComponent(lockedBrand),
          jpPrice: 1000,
          twPrice: 350,
          jpCampaign: "請手動輸入店內標價",
          jpDiscountPrice: 1000,
          twCampaign: "請點右上角官網查價",
          twDiscountPrice: 350
        };
        CrossBorderComparator.loadProduct(customProd);
      }
    } else if (currentTab === "domestic-drug") {
      // 日本藥妝比價
      DomesticDrugComparator.handleScannedBarcode(barcode);
    } else if (currentTab === "optimizer") {
      // 總額最佳試算：直接將掃描商品加入購物清單
      const sample = window.SAMPLE_PRODUCTS ? window.SAMPLE_PRODUCTS.find(p => p.barcode === barcode || p.code === barcode) : null;
      const itemName = sample ? sample.name : `掃碼商品 (${barcode})`;
      const itemPrice = sample ? (sample.jpDiscountPrice || sample.jpPrice || 1500) : 1500;
      const itemImg = sample ? sample.image : "https://placehold.co/200x200?text=掃碼品";

      BasketOptimizer.cartItems.push({
        id: "item_" + Date.now(),
        productId: barcode,
        name: itemName,
        qty: 1,
        unitPriceJpy: itemPrice,
        image: itemImg
      });
      BasketOptimizer.saveCart();
      BasketOptimizer.renderCartUI();
      alert(`已將「${itemName}」加入購物清單！`);
    }
  }
};

window.BarcodeScannerManager = BarcodeScannerManager;
// 跨國比價邏輯 (UNIQLO, MUJI, 宜得利 等)
const CrossBorderComparator = {
  currentProduct: null,

  init() {
    this.bindEvents();
  },

  bindEvents() {
    const applyBtn = document.getElementById("cb-recalc-btn");
    if (applyBtn) {
      applyBtn.addEventListener("click", () => this.calculate());
    }

    // 當使用者在任何欄位打字或切換選項時，即時自動重新計算比價
    const autoInputs = [
      "cb-jp-orig-price", "cb-jp-campaign-price",
      "cb-tw-orig-price", "cb-tw-campaign-price",
      "cb-tax-free-check", "cb-extra-coupon", "cb-credit-cashback"
    ];

    autoInputs.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => this.calculate());
        el.addEventListener("change", () => this.calculate());
      }
    });

    // 監聽自訂鎖定網址輸入
    const customJpInput = document.getElementById("cb-custom-jp-url");
    const customTwInput = document.getElementById("cb-custom-tw-url");
    if (customJpInput) {
      customJpInput.addEventListener("input", (e) => this.setCustomUrl("jp", e.target.value.trim()));
    }
    if (customTwInput) {
      customTwInput.addEventListener("input", (e) => this.setCustomUrl("tw", e.target.value.trim()));
    }

    this.restoreSiteLock();
  },

  // 快選信用卡回饋
  setCardPreset(rate) {
    const select = document.getElementById("cb-credit-cashback");
    if (select) {
      select.value = String(rate);
      this.calculate();
    }
  },

  // 支援的品牌預設網址資料庫
  PRESET_SITES: {
    MUJI: {
      name: "無印良品 (MUJI)",
      badge: "已鎖定: 無印良品",
      jpUrl: "https://www.muji.com/jp/ja/store/search/cmdty/",
      twUrl: "https://www.muji.com/tw/products/cmdty/detail/"
    },
    UNIQLO: {
      name: "UNIQLO",
      badge: "已鎖定: UNIQLO",
      jpUrl: "https://www.uniqlo.com/jp/ja/search?q=",
      twUrl: "https://www.uniqlo.com/tw/zh_TW/search.html?description="
    },
    GU: {
      name: "GU",
      badge: "已鎖定: GU",
      jpUrl: "https://www.gu-global.com/jp/ja/search?q=",
      twUrl: "https://www.gu-global.com/tw/zh_TW/search.html?description="
    },
    NITORI: {
      name: "宜得利家居 (NITORI)",
      badge: "已鎖定: 宜得利",
      jpUrl: "https://www.nitori-net.jp/ec/search/?q=",
      twUrl: "https://www.nitori-net.tw/search?q="
    }
  },

  // 套用快捷鎖定網站
  applyPresetSite(key) {
    const preset = this.PRESET_SITES[key];
    if (!preset) return;

    const jpInput = document.getElementById("cb-custom-jp-url");
    const twInput = document.getElementById("cb-custom-tw-url");
    if (jpInput) jpInput.value = preset.jpUrl;
    if (twInput) twInput.value = preset.twUrl;

    localStorage.setItem("travel_custom_jp_url", preset.jpUrl);
    localStorage.setItem("travel_custom_tw_url", preset.twUrl);
    localStorage.setItem("travel_locked_brand_name", preset.name);

    this.updateSiteLockBadge(preset.badge);

    // 若當前有商品，立即更新連結
    if (this.currentProduct) {
      this.currentProduct.brand = preset.name;
      this.loadProduct(this.currentProduct);
    }
    alert(`🎯 已成功鎖定【${preset.name}】官方網址！後續掃描條碼將直接鎖定該官網搜尋！`);
  },

  // 自訂輸入網址
  setCustomUrl(type, val) {
    if (type === "jp") {
      localStorage.setItem("travel_custom_jp_url", val);
    } else {
      localStorage.setItem("travel_custom_tw_url", val);
    }
    const jp = localStorage.getItem("travel_custom_jp_url") || "";
    const tw = localStorage.getItem("travel_custom_tw_url") || "";

    if (jp || tw) {
      this.updateSiteLockBadge("已自訂鎖定官網");
    } else {
      this.updateSiteLockBadge("未鎖定");
    }

    if (this.currentProduct) {
      this.updateSearchLinks(this.currentProduct);
    }
  },

  // 清除鎖定
  clearSiteLock() {
    localStorage.removeItem("travel_custom_jp_url");
    localStorage.removeItem("travel_custom_tw_url");
    localStorage.removeItem("travel_locked_brand_name");

    const jpInput = document.getElementById("cb-custom-jp-url");
    const twInput = document.getElementById("cb-custom-tw-url");
    if (jpInput) jpInput.value = "";
    if (twInput) twInput.value = "";

    this.updateSiteLockBadge("未鎖定");
    if (this.currentProduct) {
      this.updateSearchLinks(this.currentProduct);
    }
    alert("已清除比價官網鎖定，回復為全網智能比對。");
  },

  // 還原鎖定狀態
  restoreSiteLock() {
    const jp = localStorage.getItem("travel_custom_jp_url") || "";
    const tw = localStorage.getItem("travel_custom_tw_url") || "";
    const name = localStorage.getItem("travel_locked_brand_name");

    const jpInput = document.getElementById("cb-custom-jp-url");
    const twInput = document.getElementById("cb-custom-tw-url");
    if (jpInput && jp) jpInput.value = jp;
    if (twInput && tw) twInput.value = tw;

    if (name) {
      this.updateSiteLockBadge(`已鎖定: ${name}`);
    } else if (jp || tw) {
      this.updateSiteLockBadge("已自訂鎖定官網");
    } else {
      this.updateSiteLockBadge("未鎖定");
    }
  },

  updateSiteLockBadge(text) {
    const badge = document.getElementById("cb-site-lock-badge");
    if (!badge) return;
    badge.textContent = text;
    if (text === "未鎖定") {
      badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-600";
    } else {
      badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-600 text-white shadow-2xs";
    }
  },

  // 取得當前鎖定的搜尋網址
  getLockedUrls(product) {
    const customJp = localStorage.getItem("travel_custom_jp_url");
    const customTw = localStorage.getItem("travel_custom_tw_url");
    const term = encodeURIComponent(product.barcode || product.code || product.name || "");

    let jpUrl = "";
    let twUrl = "";

    if (customJp) {
      jpUrl = customJp.includes("=") || customJp.endsWith("/") ? `${customJp}${term}` : `${customJp}?q=${term}`;
    } else if (product.jpSearchUrl) {
      jpUrl = `${product.jpSearchUrl}${encodeURIComponent(product.code || product.name)}`;
    } else {
      jpUrl = `https://www.google.com/search?q=${term}+日本価格`;
    }

    if (customTw) {
      twUrl = customTw.includes("=") || customTw.endsWith("/") ? `${customTw}${term}` : `${customTw}?q=${term}`;
    } else if (product.twSearchUrl) {
      twUrl = `${product.twSearchUrl}${encodeURIComponent(product.code || product.name)}`;
    } else {
      twUrl = `https://www.google.com/search?q=${term}+台灣價格`;
    }

    return { jpUrl, twUrl };
  },

  updateSearchLinks(product) {
    const { jpUrl, twUrl } = this.getLockedUrls(product);
    const twSearchBtn = document.getElementById("cb-link-tw");
    const jpSearchBtn = document.getElementById("cb-link-jp");
    if (twSearchBtn) twSearchBtn.href = twUrl;
    if (jpSearchBtn) jpSearchBtn.href = jpUrl;
  },

  // 刪除目前查過的比價紀錄 / 清空當前卡片
  deleteCurrentProduct() {
    if (!this.currentProduct) return;
    if (!confirm(`確定要刪除「${this.currentProduct.name}」這筆比價紀錄嗎？`)) return;

    this.currentProduct = null;
    document.getElementById("cb-product-card").classList.add("hidden");
    document.getElementById("cb-empty-state").classList.remove("hidden");
    alert("✅ 已成功刪除該筆比價紀錄！您可以重新掃描或點選上方熱門商品。");
  },

  // 顯示/隱藏支援店家彈窗
  toggleSupportedStoresModal(show = true) {
    const modal = document.getElementById("supported-stores-modal");
    if (!modal) return;
    if (show) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  },

  // 載入商品（從掃碼或選單）
  loadProduct(product) {
    this.currentProduct = JSON.parse(JSON.stringify(product));
    
    // 填入 UI
    document.getElementById("cb-product-card").classList.remove("hidden");
    document.getElementById("cb-empty-state").classList.add("hidden");

    document.getElementById("cb-prod-img").src = product.image || "https://placehold.co/400x400?text=No+Image";
    document.getElementById("cb-prod-name").textContent = product.name;
    document.getElementById("cb-prod-brand").textContent = product.brand;
    document.getElementById("cb-prod-code").textContent = `條碼/型號: ${product.barcode || product.code || '-'}`;

    // 填入價格與活動
    document.getElementById("cb-jp-orig-price").value = product.jpPrice || 0;
    document.getElementById("cb-tw-orig-price").value = product.twPrice || 0;
    
    document.getElementById("cb-jp-campaign").value = product.jpCampaign || "";
    document.getElementById("cb-jp-campaign-price").value = product.jpDiscountPrice || product.jpPrice || 0;

    document.getElementById("cb-tw-campaign").value = product.twCampaign || "";
    document.getElementById("cb-tw-campaign-price").value = product.twDiscountPrice || product.twPrice || 0;

    this.updateSearchLinks(product);
    this.calculate();
  },

  // 計算比價結果
  calculate() {
    const rate = CurrencyManager.getRate();

    // 取得輸入值
    const jpOrig = parseFloat(document.getElementById("cb-jp-orig-price").value) || 0;
    const twOrig = parseFloat(document.getElementById("cb-tw-orig-price").value) || 0;
    const jpAct = parseFloat(document.getElementById("cb-jp-campaign-price").value) || jpOrig;
    const twAct = parseFloat(document.getElementById("cb-tw-campaign-price").value) || twOrig;

    const isTaxFree = document.getElementById("cb-tax-free-check").checked; // 是否免稅 10%
    const extraCouponPct = parseFloat(document.getElementById("cb-extra-coupon").value) || 0; // 優惠券折抵 % (如 5%)
    const creditCashback = parseFloat(document.getElementById("cb-credit-cashback").value) || 0; // 信用卡回饋 %

    // 日本入手價計算
    let finalJpy = jpAct;
    if (isTaxFree) {
      // 若原標價為含稅（日本多為含稅10%），未稅價 = 標價 / 1.1
      finalJpy = Math.round(finalJpy / 1.1);
    }
    if (extraCouponPct > 0) {
      finalJpy = Math.round(finalJpy * (1 - extraCouponPct / 100));
    }

    // 換算台幣
    let finalTwdFromJpy = Math.round(finalJpy * rate);
    if (creditCashback > 0) {
      finalTwdFromJpy = Math.round(finalTwdFromJpy * (1 - creditCashback / 100));
    }

    // 台灣最終售價（台幣）
    const finalTwdDirect = twAct;

    // 價差與折數
    const diffTwd = finalTwdDirect - finalTwdFromJpy;
    const discountPercent = finalTwdDirect > 0 ? Math.round((diffTwd / finalTwdDirect) * 100) : 0;

    // 更新顯示 UI
    document.getElementById("res-jp-final-jpy").textContent = `¥${finalJpy.toLocaleString()}`;
    document.getElementById("res-jp-final-twd").textContent = `約 NT$ ${finalTwdFromJpy.toLocaleString()}`;
    document.getElementById("res-tw-final-twd").textContent = `NT$ ${finalTwdDirect.toLocaleString()}`;

    const diffBadge = document.getElementById("res-diff-badge");
    const diffSummary = document.getElementById("res-diff-summary");

    if (diffTwd > 0) {
      diffBadge.className = "px-3 py-1 rounded-full text-sm font-bold bg-emerald-100 text-emerald-800 border border-emerald-300";
      diffBadge.textContent = `日本買省 NT$ ${diffTwd.toLocaleString()} (${discountPercent}% OFF)`;
      diffSummary.innerHTML = `在日本買相當於台灣專櫃打 <strong>${(10 - (discountPercent/10)).toFixed(1)} 折</strong>！現賺 <strong>NT$ ${diffTwd.toLocaleString()}</strong>`;
    } else if (diffTwd < 0) {
      diffBadge.className = "px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-800 border border-amber-300";
      diffBadge.textContent = `台灣買較便宜 (貴 NT$ ${Math.abs(diffTwd).toLocaleString()})`;
      diffSummary.innerHTML = `此商品在台灣目前售價較為划算，差額約 NT$ ${Math.abs(diffTwd).toLocaleString()}`;
    } else {
      diffBadge.className = "px-3 py-1 rounded-full text-sm font-bold bg-gray-100 text-gray-800";
      diffBadge.textContent = "台日售價幾乎一致";
      diffSummary.textContent = "兩地價格換算後無明顯價差。";
    }
  }
};

window.CrossBorderComparator = CrossBorderComparator;
// 日本國內藥妝多店比價模組 (松本清、唐吉訶德、大國等)
const DomesticDrugComparator = {
  STORAGE_KEY: "travel_domestic_drug_records",
  records: [], // [{ id, barcode, name, image, stores: [{ storeName, price, isTaxIncluded, note, photo, date }] }]
  selectedProductId: null,
  currentShelfPhoto: null,
  isBatchMode: false,
  selectedBatchIds: new Set(),

  init() {
    this.loadRecords();
    this.renderCouponList();
    this.bindEvents();
    this.renderProductsList();
  },

  loadRecords() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      try {
        this.records = JSON.parse(raw);
      } catch (e) {
        this.records = [];
      }
    }
    // 如果是空的，預先填入一筆熱門商品範例（方便使用者立即看到效果）
    if (this.records.length === 0 && window.SAMPLE_PRODUCTS) {
      const sample = window.SAMPLE_PRODUCTS.find(p => p.category === "medicine");
      if (sample) {
        this.records.push({
          id: "rec_" + Date.now(),
          barcode: sample.barcode,
          name: sample.name,
          image: sample.image,
          category: sample.category,
          stores: [
            { storeName: "唐吉訶德 澀谷店", price: 5480, isTaxIncluded: true, note: "未退稅標價", date: "今天 10:30" },
            { storeName: "松本清 新宿東口店", price: 4980, isTaxIncluded: false, note: "滿萬再折 5%", date: "今天 13:15" },
            { storeName: "大國藥妝 心齋橋店", price: 4780, isTaxIncluded: false, note: "特惠限購2罐", date: "今天 15:40" }
          ]
        });
        this.saveRecords();
      }
    }
  },

  saveRecords() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.records));
  },

  bindEvents() {
    // 新增店家價格
    const addPriceForm = document.getElementById("add-price-form");
    if (addPriceForm) {
      addPriceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleAddStorePrice();
      });
    }

    // 建立新商品按鈕
    const createProdBtn = document.getElementById("btn-create-drug-prod");
    if (createProdBtn) {
      createProdBtn.addEventListener("click", () => this.showCreateProductModal());
    }
  },

  // 接收條碼掃描
  handleScannedBarcode(barcode) {
    let existing = this.records.find(r => r.barcode === barcode);
    if (!existing) {
      // 檢查是否在預置庫中
      const sample = window.SAMPLE_PRODUCTS.find(p => p.barcode === barcode);
      if (sample) {
        existing = {
          id: "rec_" + Date.now(),
          barcode: sample.barcode,
          name: sample.name,
          image: sample.image,
          category: sample.category,
          stores: []
        };
        this.records.unshift(existing);
        this.saveRecords();
      } else {
        // 未知商品，彈出建立視窗
        this.showCreateProductModal(barcode);
        return;
      }
    }
    this.selectProduct(existing.id);
  },

  showCreateProductModal(barcode = "") {
    const modal = document.getElementById("create-prod-modal");
    document.getElementById("modal-prod-barcode").value = barcode;
    document.getElementById("modal-prod-name").value = "";
    document.getElementById("modal-prod-image").value = "";
    modal.classList.remove("hidden");
  },

  closeCreateProductModal() {
    document.getElementById("create-prod-modal").classList.add("hidden");
  },

  submitCreateProduct(name, barcode, imageUrl) {
    if (!name) {
      alert("請輸入商品名稱");
      return;
    }
    const newProd = {
      id: "rec_" + Date.now(),
      barcode: barcode || ("CUSTOM-" + Math.floor(Math.random() * 899999 + 100000)),
      name: name,
      image: imageUrl || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      stores: []
    };
    this.records.unshift(newProd);
    this.saveRecords();
    this.closeCreateProductModal();
    this.renderProductsList();
    this.selectProduct(newProd.id);
  },

  selectProduct(id) {
    this.selectedProductId = id;
    this.renderProductsList();
    this.renderComparisonDetail(id);
  },

  handleAddStorePrice() {
    if (!this.selectedProductId) {
      alert("請先選擇或掃描一個商品！");
      return;
    }
    const storeSelect = document.getElementById("input-store-name");
    const customStore = document.getElementById("input-custom-store").value.trim();
    const storeName = customStore || storeSelect.value;
    const price = parseFloat(document.getElementById("input-store-price").value);
    const isTaxIncluded = document.getElementById("input-tax-included").checked;
    const note = document.getElementById("input-store-note").value.trim();

    if (!storeName || isNaN(price) || price <= 0) {
      alert("請輸入有效的店家名稱與日圓價格！");
      return;
    }

    const prod = this.records.find(r => r.id === this.selectedProductId);
    if (!prod) return;

    // 將既有的同店家紀錄更新，或新增
    const nowStr = new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" });
    const existingStoreIndex = prod.stores.findIndex(s => s.storeName === storeName);
    
    const storeData = {
      storeName,
      price,
      isTaxIncluded,
      note,
      photo: this.currentShelfPhoto || null,
      date: nowStr
    };

    if (existingStoreIndex >= 0) {
      prod.stores[existingStoreIndex] = storeData;
    } else {
      prod.stores.push(storeData);
    }

    this.saveRecords();
    if (window.GoogleSheetSync) {
      window.GoogleSheetSync.triggerAutoSync();
    }

    document.getElementById("input-store-price").value = "";
    document.getElementById("input-custom-store").value = "";
    document.getElementById("input-store-note").value = "";
    this.clearSelectedPhoto();

    this.renderComparisonDetail(prod.id);
  },

  // 照片拍照處理 (壓縮成縮圖 base64 存入 localStorage 防止過大)
  handleShelfPhotoSelected(inputEl) {
    if (!inputEl.files || inputEl.files.length === 0) return;
    const file = inputEl.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxDim = 800; // 最寬或最高 800px 節省容量
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);

        this.currentShelfPhoto = compressedBase64;
        document.getElementById("shelf-photo-thumb").src = compressedBase64;
        document.getElementById("shelf-photo-preview-wrap").classList.remove("hidden");
        document.getElementById("shelf-photo-label").textContent = "已拍存證照 (點擊可重拍)";
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  },

  clearSelectedPhoto() {
    this.currentShelfPhoto = null;
    const thumb = document.getElementById("shelf-photo-thumb");
    if (thumb) thumb.src = "";
    const wrap = document.getElementById("shelf-photo-preview-wrap");
    if (wrap) wrap.classList.add("hidden");
    const label = document.getElementById("shelf-photo-label");
    if (label) label.textContent = "拍貨架標籤 (存證防混淆)";
    const fileInput = document.getElementById("input-shelf-photo");
    if (fileInput) fileInput.value = "";
  },

  viewPhoto(src) {
    if (!src) return;
    document.getElementById("photo-viewer-img").src = src;
    document.getElementById("photo-viewer-modal").classList.remove("hidden");
  },

  closePhotoViewer() {
    document.getElementById("photo-viewer-modal").classList.add("hidden");
  },

  // 當切換藥妝店家時，提供各大店家的含稅/未稅標示貼心提醒
  handleStoreSelectChange(storeName) {
    const tipEl = document.getElementById("store-tax-tip-text");
    const taxCheck = document.getElementById("input-tax-included");
    if (!tipEl) return;

    if (storeName.includes("大國")) {
      tipEl.textContent = "💡 大國藥妝：貨架上最醒目的通常為「未稅價」(紅色大字)，建議取消勾選含稅。";
      if (taxCheck) taxCheck.checked = false;
    } else if (storeName.includes("唐吉訶德")) {
      tipEl.textContent = "💡 唐吉訶德：通常黑字為含稅價、紅字為未稅價，請留意輸入的數字！";
    } else if (storeName.includes("松本清") || storeName.includes("Sundrug")) {
      tipEl.textContent = "💡 松本清 / Sundrug：貨架大多同時標示含稅與未稅，請核對勾選。";
    } else if (storeName.includes("Bic Camera")) {
      tipEl.textContent = "💡 Bic Camera：通常標價為未稅價，結帳搭配旅客優惠券可享 10% + 5%~7% 折扣。";
    } else {
      tipEl.textContent = "💡 請確認貨架標籤是含稅(税込)還是未稅(税抜)，並切換右側勾選。";
    }
  },

  // 匯出全部比價紀錄為 JSON (方便備份或分享給同行旅伴)
  exportRecordsJSON() {
    if (this.records.length === 0) {
      alert("目前尚無任何比價記錄可匯出！");
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.records, null, 2));
    const dlAnchor = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `japan_drug_prices_${dateStr}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    alert("✅ 已成功匯出比價資料！可直接傳給同行旅伴透過「📥 匯入」同步！");
  },

  // 匯入同行旅伴的 JSON 紀錄
  importRecordsJSON() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (!Array.isArray(imported)) {
            throw new Error("格式錯誤：必須是比價資料陣列");
          }
          if (confirm(`即將匯入 ${imported.length} 筆商品比價記錄，是否確認合併？`)) {
            // 合併既有與匯入的商品
            imported.forEach(newItem => {
              const existingIdx = this.records.findIndex(r => r.barcode && r.barcode === newItem.barcode);
              if (existingIdx >= 0) {
                // 合併店家
                const existing = this.records[existingIdx];
                newItem.stores.forEach(ns => {
                  if (!existing.stores.some(es => es.storeName === ns.storeName)) {
                    existing.stores.push(ns);
                  }
                });
              } else {
                this.records.push(newItem);
              }
            });
            this.saveRecords();
            this.renderProductsList();
            if (this.records.length > 0) {
              this.selectProduct(this.records[0].id);
            }
            alert("🎉 匯入並合併成功！");
          }
        } catch (err) {
          alert("⚠️ 匯入失敗，請確認檔案格式是否正確: " + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  },

  // 批次刪除與清空資料功能
  toggleBatchMode(force = null) {
    this.isBatchMode = force !== null ? force : !this.isBatchMode;
    const bar = document.getElementById("batch-delete-bar");
    if (bar) {
      if (this.isBatchMode) {
        bar.classList.remove("hidden");
      } else {
        bar.classList.add("hidden");
        this.selectedBatchIds.clear();
      }
    }
    this.renderProductsList();
  },

  toggleBatchSelect(prodId, isChecked) {
    if (isChecked) {
      this.selectedBatchIds.add(prodId);
    } else {
      this.selectedBatchIds.delete(prodId);
    }
  },

  executeBatchDelete() {
    if (this.selectedBatchIds.size === 0) {
      alert("請先勾選要刪除的商品！");
      return;
    }
    if (!confirm(`確定要刪除選取的 ${this.selectedBatchIds.size} 項商品比價記錄嗎？`)) {
      return;
    }
    this.records = this.records.filter(r => !this.selectedBatchIds.has(r.id));
    this.saveRecords();
    this.selectedBatchIds.clear();
    this.toggleBatchMode(false);
    this.selectedProductId = this.records.length > 0 ? this.records[0].id : null;
    this.renderProductsList();
    if (this.selectedProductId) {
      this.renderComparisonDetail(this.selectedProductId);
    } else {
      document.getElementById("drug-detail-view").classList.add("hidden");
      document.getElementById("drug-empty-view").classList.remove("hidden");
    }
  },

  clearAllRecords() {
    if (!confirm("⚠️ 警告：這將會清除「所有已記錄的藥妝比價資料」，確定要全部清空嗎？")) {
      return;
    }
    this.records = [];
    this.saveRecords();
    this.selectedBatchIds.clear();
    this.toggleBatchMode(false);
    this.selectedProductId = null;
    this.renderProductsList();
    document.getElementById("drug-detail-view").classList.add("hidden");
    document.getElementById("drug-empty-view").classList.remove("hidden");
  },

  deleteStorePrice(prodId, storeIndex) {
    const prod = this.records.find(r => r.id === prodId);
    if (prod && prod.stores[storeIndex]) {
      prod.stores.splice(storeIndex, 1);
      this.saveRecords();
      this.renderComparisonDetail(prodId);
    }
  },

  deleteProduct(prodId) {
    if (!confirm("確定要刪除此商品的全部比價記錄嗎？")) return;
    this.records = this.records.filter(r => r.id !== prodId);
    this.saveRecords();
    this.selectedProductId = this.records.length > 0 ? this.records[0].id : null;
    this.renderProductsList();
    if (this.selectedProductId) {
      this.renderComparisonDetail(this.selectedProductId);
    } else {
      document.getElementById("drug-detail-view").classList.add("hidden");
      document.getElementById("drug-empty-view").classList.remove("hidden");
    }
  },

  // 渲染所有已記錄商品清單 (頂部滑動卡片)
  renderProductsList() {
    const container = document.getElementById("drug-prod-chips");
    if (!container) return;

    if (this.records.length === 0) {
      container.innerHTML = `<span class="text-xs text-gray-400">尚未記錄任何商品，請掃碼或點擊＋新增</span>`;
      return;
    }

    container.innerHTML = this.records.map(prod => {
      const isSelected = prod.id === this.selectedProductId;
      const count = prod.stores.length;
      const isChecked = this.selectedBatchIds.has(prod.id);

      if (this.isBatchMode) {
        return `
          <label class="flex-shrink-0 flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-medium cursor-pointer ${
            isChecked ? 'bg-rose-100 border-rose-500 text-rose-800' : 'bg-white border-slate-200 text-slate-700'
          }">
            <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="DomesticDrugComparator.toggleBatchSelect('${prod.id}', this.checked)" class="rounded text-rose-600">
            <span class="truncate max-w-[110px]">${prod.name}</span>
            <span class="text-[10px] text-slate-400">(${count}店)</span>
          </label>
        `;
      }

      return `
        <button onclick="DomesticDrugComparator.selectProduct('${prod.id}')"
          class="flex-shrink-0 flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
            isSelected 
              ? 'bg-rose-600 text-white border-rose-600 shadow-sm' 
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
          }">
          <span class="truncate max-w-[110px]">${prod.name}</span>
          <span class="px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? 'bg-rose-800 text-white' : 'bg-gray-100 text-gray-600'}">${count}店</span>
        </button>
      `;
    }).join("");
  },

  // 渲染目前選中商品的各店比價排行榜
  renderComparisonDetail(prodId) {
    const prod = this.records.find(r => r.id === prodId);
    const detailView = document.getElementById("drug-detail-view");
    const emptyView = document.getElementById("drug-empty-view");

    if (!prod) {
      detailView.classList.add("hidden");
      emptyView.classList.remove("hidden");
      return;
    }

    detailView.classList.remove("hidden");
    emptyView.classList.add("hidden");

    // 基本資訊
    document.getElementById("drug-prod-name").textContent = prod.name;
    document.getElementById("drug-prod-barcode").textContent = `條碼: ${prod.barcode || '無'}`;
    document.getElementById("drug-prod-img").src = prod.image || "https://placehold.co/400x400?text=藥妝";
    
    // 快速搜尋官方比價
    const searchA = document.getElementById("drug-web-search");
    if (searchA) {
      searchA.href = `https://www.google.com/search?q=${encodeURIComponent(prod.name)}+藥妝+比價`;
    }

    const rate = CurrencyManager.getRate();

    // 排序各店價格：換算未稅等效基準比較
    // 假設外國人買滿 5000 円可退稅，若標示含稅則除以 1.1 換算為稅前基礎比較
    const normalizedStores = prod.stores.map((s, idx) => {
      const netPrice = s.isTaxIncluded ? Math.round(s.price / 1.1) : s.price;
      const twd = Math.round(netPrice * rate);
      return { ...s, netPrice, twd, originalIndex: idx };
    }).sort((a, b) => a.netPrice - b.netPrice);

    const lowestNetPrice = normalizedStores.length > 0 ? normalizedStores[0].netPrice : 0;
    const highestNetPrice = normalizedStores.length > 0 ? normalizedStores[normalizedStores.length - 1].netPrice : 0;
    const maxDiffJpy = highestNetPrice - lowestNetPrice;
    const maxDiffTwd = Math.round(maxDiffJpy * rate);

    // 頂部最優推薦提示
    const bestBanner = document.getElementById("drug-best-banner");
    if (normalizedStores.length >= 2 && maxDiffJpy > 0) {
      bestBanner.classList.remove("hidden");
      bestBanner.innerHTML = `
        <div class="flex items-center justify-between text-xs sm:text-sm">
          <span>🏆 <strong>${normalizedStores[0].storeName}</strong> 最便宜！</span>
          <span class="font-bold text-rose-600">最高立省 ¥${maxDiffJpy.toLocaleString()} (約 NT$ ${maxDiffTwd})</span>
        </div>
      `;
    } else {
      bestBanner.classList.add("hidden");
    }

    // 表格內容
    const tableBody = document.getElementById("drug-stores-table-body");
    if (normalizedStores.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="4" class="text-center py-6 text-gray-400 text-xs">這間商品還沒有輸入店家價格，請在下方快速記錄！</td></tr>`;
      return;
    }

    tableBody.innerHTML = normalizedStores.map((s, rank) => {
      const isLowest = rank === 0;
      const isHighest = rank === normalizedStores.length - 1 && normalizedStores.length > 1;
      const diffFromBest = s.netPrice - lowestNetPrice;

      return `
        <tr class="border-b border-gray-100 ${isLowest ? 'bg-emerald-50/70 font-semibold' : ''}">
          <td class="py-3 px-2">
            <div class="flex items-center space-x-1.5">
              ${isLowest ? '<span class="text-xs px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold">最低</span>' : `<span class="text-xs text-gray-400 font-mono">#${rank+1}</span>`}
              <div>
                <div class="text-sm font-medium text-gray-800 flex items-center gap-1.5">
                  <span>${s.storeName}</span>
                  ${s.photo ? `
                    <button onclick="DomesticDrugComparator.viewPhoto('${s.photo}')" class="px-1.5 py-0.5 rounded bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold hover:bg-indigo-100 flex items-center gap-0.5">
                      📷 貨架照
                    </button>
                  ` : ''}
                </div>
                ${s.note ? `<div class="text-[11px] text-gray-500">${s.note}</div>` : ''}
              </div>
            </div>
          </td>
          <td class="py-3 px-2 text-right">
            <div class="text-sm font-bold ${isLowest ? 'text-emerald-700' : 'text-gray-900'}">
              ¥${s.price.toLocaleString()}
            </div>
            <div class="text-[10px] text-gray-400">
              ${s.isTaxIncluded ? '含稅' : '未稅'} · 免稅等效: ¥${s.netPrice.toLocaleString()}
            </div>
          </td>
          <td class="py-3 px-2 text-right">
            <div class="text-xs font-semibold text-gray-700">NT$ ${s.twd.toLocaleString()}</div>
            ${diffFromBest > 0 ? `<div class="text-[10px] text-rose-500 font-medium">+¥${diffFromBest}</div>` : '<div class="text-[10px] text-emerald-600 font-medium">最划算</div>'}
          </td>
          <td class="py-3 px-1 text-center">
            <button onclick="DomesticDrugComparator.deleteStorePrice('${prod.id}', ${s.originalIndex})" class="text-gray-300 hover:text-rose-500 text-xs p-1">
              ✕
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  // 渲染各大藥妝最新折價券/活動
  renderCouponList() {
    const list = document.getElementById("drug-coupons-carousel");
    if (!list || !window.DRUGSTORE_COUPONS) return;

    list.innerHTML = window.DRUGSTORE_COUPONS.map(c => `
      <div class="min-w-[240px] max-w-[260px] flex-shrink-0 bg-white rounded-xl border border-gray-100 p-3 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div class="h-1.5 w-full bg-gradient-to-r ${c.bgColor} absolute top-0 left-0"></div>
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-gray-800">${c.store}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 font-bold">${c.tag}</span>
        </div>
        <p class="text-[11px] text-gray-600 line-clamp-2 leading-relaxed mb-2">${c.desc}</p>
        <div class="flex items-center justify-between pt-1 border-t border-gray-50 text-[10px]">
          <span class="text-gray-400">${c.validDate}</span>
          <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold flex items-center">
            領取活動券 ↗
          </a>
        </div>
      </div>
    `).join("");
  }
};

window.DomesticDrugComparator = DomesticDrugComparator;
// 購物車總金額最佳店家優惠試算與推薦引擎
const BasketOptimizer = {
  STORAGE_KEY: "travel_shopping_cart_items",
  cartItems: [], // [{ id, productId, name, qty, image }]

  // 日本各大連鎖藥妝店優惠規則階梯 (含免稅與滿額階梯折扣)
  STORE_RULES: [
    {
      id: "donki",
      name: "唐吉訶德 (驚安殿堂)",
      taxFreeThreshold: 5000,
      taxFreeRate: 0.10, // 免稅 10%
      tiers: [
        { minSpend: 10000, extraDiscountRate: 0.05, name: "免稅10% + 滿萬折5%電子券" },
        { minSpend: 30000, extraDiscountRate: 0.07, name: "免稅10% + 滿3萬折7%特惠券" }
      ],
      defaultPriceRatio: 1.0, // 價格基準係數
      color: "from-amber-500 to-yellow-600",
      tips: "商品品項最齊全，適合零食+美妝+日常用品一次湊滿。"
    },
    {
      id: "matsukiyo",
      name: "松本清 (Matsukiyo)",
      taxFreeThreshold: 5000,
      taxFreeRate: 0.10,
      tiers: [
        { minSpend: 10000, extraDiscountRate: 0.03, name: "免稅10% + 滿1萬折3%" },
        { minSpend: 30000, extraDiscountRate: 0.05, name: "免稅10% + 滿3萬折5%" },
        { minSpend: 50000, extraDiscountRate: 0.07, name: "免稅10% + 滿5萬折7%" }
      ],
      defaultPriceRatio: 1.03,
      color: "from-blue-600 to-indigo-700",
      tips: "醫藥品與專櫃美妝齊全，滿5萬日圓折7%折抵力度大。"
    },
    {
      id: "daikoku",
      name: "大國藥妝 (Daikoku)",
      taxFreeThreshold: 5000,
      taxFreeRate: 0.10,
      tiers: [
        { minSpend: 5000, extraDiscountRate: 0.03, name: "免稅10% + 滿5千常態折3%" },
        { minSpend: 30000, extraDiscountRate: 0.05, name: "免稅10% + 滿3萬折5%" },
        { minSpend: 50000, extraDiscountRate: 0.08, name: "免稅10% + 滿5萬折8%" }
      ],
      defaultPriceRatio: 0.96, // 單價通常較低
      color: "from-rose-600 to-red-700",
      tips: "熱門藥品常態標價低，低門檻即有折扣，小資散買首選。"
    },
    {
      id: "sundrug",
      name: "Sundrug (尚都樂客)",
      taxFreeThreshold: 5000,
      taxFreeRate: 0.10,
      tiers: [
        { minSpend: 10000, extraDiscountRate: 0.03, name: "免稅10% + 滿1萬折3%" },
        { minSpend: 30000, extraDiscountRate: 0.05, name: "免稅10% + 滿3萬折5%" },
        { minSpend: 50000, extraDiscountRate: 0.07, name: "免稅10% + 滿5萬折7%" }
      ],
      defaultPriceRatio: 0.97,
      color: "from-orange-500 to-amber-600",
      tips: "日本在地常去店鋪，價格與大國相近，滿3萬/5萬折扣誘人。"
    },
    {
      id: "biccamera",
      name: "Bic Camera (藥妝專區)",
      taxFreeThreshold: 5000,
      taxFreeRate: 0.10,
      tiers: [
        { minSpend: 5000, extraDiscountRate: 0.05, name: "免稅10% + 藥妝專屬折5%" }
      ],
      defaultPriceRatio: 1.02,
      color: "from-emerald-600 to-teal-700",
      tips: "如果同時買電器與藥妝，一站湊滿免稅非常方便。"
    }
  ],

  init() {
    this.loadCart();
    this.bindEvents();
    this.renderCartUI();
  },

  loadCart() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      try {
        this.cartItems = JSON.parse(raw);
      } catch (e) {
        this.cartItems = [];
      }
    }

    // 預設填入範例購物車，方便使用者立刻看懂
    if (this.cartItems.length === 0 && window.SAMPLE_PRODUCTS) {
      const sample1 = window.SAMPLE_PRODUCTS.find(p => p.barcode === "4987123145167") || window.SAMPLE_PRODUCTS[0];
      const sample2 = window.SAMPLE_PRODUCTS.find(p => p.barcode === "4987300052717") || window.SAMPLE_PRODUCTS[1];
      if (sample1) {
        this.cartItems.push({
          id: "item_1",
          productId: sample1.barcode,
          name: sample1.name,
          qty: 2,
          unitPriceJpy: sample1.jpPrice || 4980,
          image: sample1.image
        });
      }
      if (sample2) {
        this.cartItems.push({
          id: "item_2",
          productId: sample2.barcode,
          name: sample2.name,
          qty: 1,
          unitPriceJpy: sample2.jpPrice || 1680,
          image: sample2.image
        });
      }
      this.saveCart();
    }
  },

  saveCart() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cartItems));
  },

  bindEvents() {
    // 快速手動輸入總預算金額試算
    const manualBudgetInput = document.getElementById("cart-custom-budget");
    if (manualBudgetInput) {
      manualBudgetInput.addEventListener("input", () => this.calculateOptimalStore());
    }

    // 快速清空購物車
    const clearBtn = document.getElementById("btn-clear-cart");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (confirm("確定要清空購物清單嗎？")) {
          this.cartItems = [];
          this.saveCart();
          this.renderCartUI();
        }
      });
    }

    // 點擊新增現有商品到購物車
    const addSampleBtn = document.getElementById("btn-add-sample-to-cart");
    if (addSampleBtn) {
      addSampleBtn.addEventListener("click", () => this.promptAddCustomItem());
    }
  },

  promptAddCustomItem() {
    const name = prompt("請輸入商品名稱:", "合利他命 EX PLUS");
    if (!name) return;
    const priceStr = prompt("預估單價 (JPY):", "4980");
    const price = parseFloat(priceStr) || 1000;
    const qtyStr = prompt("購買數量:", "1");
    const qty = parseInt(qtyStr, 10) || 1;

    this.cartItems.push({
      id: "item_" + Date.now(),
      productId: "custom",
      name: name,
      qty: qty,
      unitPriceJpy: price,
      image: "https://placehold.co/200x200?text=" + encodeURIComponent(name.substring(0, 4))
    });
    this.saveCart();
    this.renderCartUI();
  },

  updateQty(itemId, change) {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.qty += change;
      if (item.qty <= 0) {
        this.cartItems = this.cartItems.filter(i => i.id !== itemId);
      }
      this.saveCart();
      this.renderCartUI();
    }
  },

  deleteItem(itemId) {
    this.cartItems = this.cartItems.filter(i => i.id !== itemId);
    this.saveCart();
    this.renderCartUI();
  },

  // 取得購物車總含稅預估金額
  getCartGrossTotal() {
    return this.cartItems.reduce((acc, cur) => acc + (cur.unitPriceJpy * cur.qty), 0);
  },

  // 核心演算法：計算「在各個店家購買該總金額」的最佳優惠與扣抵
  calculateOptimalStore() {
    const manualInput = document.getElementById("cart-custom-budget");
    const manualBudget = manualInput ? parseFloat(manualInput.value) : 0;
    
    // 若有自訂金額則以自訂金額為主，否則以購物車加總為主
    const baseTotal = (manualBudget && manualBudget > 0) ? manualBudget : this.getCartGrossTotal();
    const rate = CurrencyManager.getRate();

    // 更新總計顯示
    const cartTotalEl = document.getElementById("cart-total-jpy");
    const cartTwdEl = document.getElementById("cart-total-twd");
    if (cartTotalEl) cartTotalEl.textContent = `¥${Math.round(baseTotal).toLocaleString()}`;
    if (cartTwdEl) cartTwdEl.textContent = `約 NT$ ${Math.round(baseTotal * rate).toLocaleString()}`;

    // 免稅進度條 (5,000 円門檻)
    this.updateTaxFreeProgress(baseTotal);

    // 針對每間連鎖藥妝店進行試算
    const storeResults = this.STORE_RULES.map(store => {
      // 基準原價（以未稅為基準估算，日本含稅標價除以 1.1）
      const rawNetSpend = Math.round(baseTotal / 1.1);
      
      let isTaxFreeEligible = baseTotal >= store.taxFreeThreshold;
      let finalNetSpend = isTaxFreeEligible ? rawNetSpend : baseTotal;
      let bestTier = null;
      let extraDiscountAmount = 0;

      // 檢查是否符合更高階梯滿額折價券
      if (isTaxFreeEligible && store.tiers && store.tiers.length > 0) {
        // 從門檻最高往最低比對
        for (let i = store.tiers.length - 1; i >= 0; i--) {
          const tier = store.tiers[i];
          if (finalNetSpend >= tier.minSpend || baseTotal >= tier.minSpend) {
            bestTier = tier;
            extraDiscountAmount = Math.round(finalNetSpend * tier.extraDiscountRate);
            finalNetSpend -= extraDiscountAmount;
            break;
          }
        }
      }

      // 下一個優惠階梯差距提示
      let nextTierGap = null;
      if (store.tiers && store.tiers.length > 0) {
        for (let i = 0; i < store.tiers.length; i++) {
          const tier = store.tiers[i];
          const spendBase = isTaxFreeEligible ? rawNetSpend : baseTotal;
          if (spendBase < tier.minSpend) {
            nextTierGap = {
              neededJpy: tier.minSpend - spendBase,
              rate: Math.round(tier.extraDiscountRate * 100),
              name: tier.name
            };
            break;
          }
        }
      }

      const totalSavedJpy = baseTotal - finalNetSpend;
      const finalTwd = Math.round(finalNetSpend * rate);
      const savedTwd = Math.round(totalSavedJpy * rate);

      return {
        store,
        baseTotal,
        finalNetSpend,
        finalTwd,
        totalSavedJpy,
        savedTwd,
        isTaxFreeEligible,
        bestTier,
        nextTierGap
      };
    });

    // 依「最終需支付日圓金額 (最低者最佳)」排序
    storeResults.sort((a, b) => a.finalNetSpend - b.finalNetSpend);

    this.renderOptimizationResults(storeResults);
  },

  // 免稅 5,000 円進度條更新
  updateTaxFreeProgress(totalSpend) {
    const bar = document.getElementById("taxfree-progress-bar");
    const statusText = document.getElementById("taxfree-status-text");
    const tag = document.getElementById("taxfree-tag");

    const threshold = 5000;
    const pct = Math.min(100, Math.round((totalSpend / threshold) * 100));

    if (bar) bar.style.width = `${pct}%`;

    if (totalSpend >= threshold) {
      if (bar) bar.className = "h-full bg-emerald-500 rounded-full transition-all duration-500";
      if (statusText) statusText.innerHTML = `🎉 已達免稅門檻！全館消費享 <strong>10% OFF</strong>`;
      if (tag) {
        tag.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800";
        tag.textContent = "已達免稅 (10% OFF)";
      }
    } else {
      const gap = threshold - totalSpend;
      if (bar) bar.className = "h-full bg-amber-400 rounded-full transition-all duration-500";
      if (statusText) statusText.innerHTML = `差 <strong>¥${gap.toLocaleString()}</strong> 即可退稅 10% (進度 ${pct}%)`;
      if (tag) {
        tag.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800";
        tag.textContent = `還差 ¥${gap.toLocaleString()}`;
      }
    }
  },

  // 渲染試算與排行榜卡片
  renderOptimizationResults(results) {
    const container = document.getElementById("optimizer-rankings-container");
    if (!container) return;

    if (results.length === 0) {
      container.innerHTML = `<div class="text-xs text-gray-400 text-center py-4">請增加購物清單或輸入總金額進行試算</div>`;
      return;
    }

    const winner = results[0];
    const second = results[1];
    const maxDiff = second ? (second.finalNetSpend - winner.finalNetSpend) : 0;
    const rate = CurrencyManager.getRate();

    // 頂部最佳推薦 Banner
    const winnerBanner = document.getElementById("optimizer-winner-banner");
    if (winnerBanner) {
      winnerBanner.innerHTML = `
        <div class="flex items-center space-x-2">
          <span class="text-2xl">🥇</span>
          <div class="flex-1 min-w-0">
            <div class="text-xs text-amber-200 font-semibold">此預算金額最佳優惠推薦</div>
            <div class="text-base font-black truncate">${winner.store.name}</div>
          </div>
          <div class="text-right">
            <div class="text-xs text-emerald-300 font-bold">預估實付</div>
            <div class="text-lg font-black text-white">¥${winner.finalNetSpend.toLocaleString()}</div>
            <div class="text-[11px] text-amber-200">約 NT$ ${winner.finalTwd.toLocaleString()}</div>
          </div>
        </div>
        <div class="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-xs">
          <span>💰 總計折抵：<strong>¥${winner.totalSavedJpy.toLocaleString()}</strong> (省 NT$ ${winner.savedTwd.toLocaleString()})</span>
          ${winner.bestTier ? `<span class="bg-amber-400/30 px-2 py-0.5 rounded text-[11px] font-bold">${winner.bestTier.name}</span>` : ''}
        </div>
      `;
    }

    // 各店家試算清單比較
    container.innerHTML = results.map((res, idx) => {
      const isTop = idx === 0;
      const diffFromWinner = res.finalNetSpend - winner.finalNetSpend;

      return `
        <div class="p-3.5 rounded-xl border ${isTop ? 'border-amber-400 bg-amber-50/50 shadow-sm ring-1 ring-amber-300' : 'border-slate-200 bg-white'} space-y-2">
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-2">
              <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black ${isTop ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'}">
                ${idx + 1}
              </span>
              <div>
                <h4 class="text-sm font-bold text-slate-800">${res.store.name}</h4>
                <p class="text-[10px] text-slate-500">${res.store.tips}</p>
              </div>
            </div>
            
            <div class="text-right">
              <div class="text-sm font-black ${isTop ? 'text-amber-600' : 'text-slate-800'}">
                ¥${res.finalNetSpend.toLocaleString()}
              </div>
              <div class="text-[11px] font-medium text-slate-500">
                約 NT$ ${res.finalTwd.toLocaleString()}
              </div>
            </div>
          </div>

          <!-- 折扣明細與標籤 -->
          <div class="flex flex-wrap gap-1.5 pt-1 text-[10px]">
            <span class="px-2 py-0.5 rounded ${res.isTaxFreeEligible ? 'bg-emerald-100 text-emerald-800 font-semibold' : 'bg-slate-100 text-slate-500'}">
              ${res.isTaxFreeEligible ? '✅ 享免稅 10%' : '⚠️ 未達 5,000円免稅'}
            </span>

            ${res.bestTier ? `
              <span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
                🎁 啟動優惠：${res.bestTier.name}
              </span>
            ` : '<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-500">無額外折價券</span>'}

            ${diffFromWinner > 0 ? `
              <span class="px-2 py-0.5 rounded bg-rose-50 text-rose-600 font-semibold ml-auto">
                比最佳店多付 ¥${diffFromWinner.toLocaleString()}
              </span>
            ` : '<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold ml-auto">★ 全網最划算</span>'}
          </div>

          <!-- 湊下一階折價券提醒 -->
          ${res.nextTierGap ? `
            <div class="bg-indigo-50/70 p-2 rounded-lg text-[11px] text-indigo-900 flex items-center justify-between border border-indigo-100">
              <span>💡 再湊 <strong>¥${res.nextTierGap.neededJpy.toLocaleString()}</strong></span>
              <span class="font-bold text-indigo-700">可多折 ${res.nextTierGap.rate}% (${res.nextTierGap.name})</span>
            </div>
          ` : ''}
        </div>
      `;
    }).join("");
  },

  // 渲染購物車清單列表
  renderCartUI() {
    const listEl = document.getElementById("cart-items-list");
    if (!listEl) return;

    if (this.cartItems.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-6 text-slate-400 text-xs bg-slate-50 rounded-xl border border-dashed border-slate-200">
          目前購物車為空。請點擊「＋新增欲購商品」或在上方輸入自訂總金額！
        </div>
      `;
    } else {
      listEl.innerHTML = this.cartItems.map(item => `
        <div class="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-white shadow-2xs space-x-2">
          <img src="${item.image || 'https://placehold.co/100x100?text=藥妝'}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-100">
          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-slate-800 truncate">${item.name}</h5>
            <div class="text-[11px] text-slate-500">單價: ¥${item.unitPriceJpy.toLocaleString()}</div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
              <button onclick="BasketOptimizer.updateQty('${item.id}', -1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-200">-</button>
              <span class="px-2 text-xs font-bold text-slate-800">${item.qty}</span>
              <button onclick="BasketOptimizer.updateQty('${item.id}', 1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-200">+</button>
            </div>
            <div class="text-xs font-bold text-slate-900 w-16 text-right">
              ¥${(item.unitPriceJpy * item.qty).toLocaleString()}
            </div>
            <button onclick="BasketOptimizer.deleteItem('${item.id}')" class="text-slate-300 hover:text-rose-500 text-xs px-1">✕</button>
          </div>
        </div>
      `).join("");
    }

    this.calculateOptimalStore();
  },

  // 匯出採購清單與請款單 (可複製至 LINE 或下載成檔案)
  exportPurchaseList() {
    if (this.cartItems.length === 0) {
      alert("目前購物車沒有任何商品，請先點擊「＋加品項」加入商品！");
      return;
    }

    const rate = CurrencyManager.getRate();
    let totalJpy = 0;
    let listText = `🧾【出國血拚代購採購請款清單】\n(當前結算匯率: ${rate})\n-----------------------------\n`;

    this.cartItems.forEach((item, idx) => {
      const subtotalJpy = item.unitPriceJpy * item.qty;
      const subtotalTwd = Math.round(subtotalJpy * rate);
      totalJpy += subtotalJpy;
      listText += `${idx + 1}. ${item.name}\n   數量: ${item.qty} | 單價: ¥${item.unitPriceJpy.toLocaleString()}\n   小計: ¥${subtotalJpy.toLocaleString()} (約 NT$ ${subtotalTwd.toLocaleString()})\n`;
    });

    const totalTwd = Math.round(totalJpy * rate);
    listText += `-----------------------------\n`;
    listText += `💰 總計金額: ¥${totalJpy.toLocaleString()} (約 NT$ ${totalTwd.toLocaleString()})\n`;
    listText += `(以上為日圓定價換算，若有退稅或店內活動折扣依實付為準)\n`;

    // 嘗試複製至剪貼簿
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(listText).then(() => {
        alert("✅ 採購請款明細已成功複製到剪貼簿！可直接貼在 LINE 傳給親友！\n\n預覽：\n" + listText);
      }).catch(() => {
        prompt("請手動複製以下採購請款文字：", listText);
      });
    } else {
      prompt("請手動複製以下採購請款文字：", listText);
    }
  }
};

window.BasketOptimizer = BasketOptimizer;
// 應用程式核心控制器
const App = {
  currentTab: "cross-border", // "cross-border" | "domestic-drug" | "optimizer"

  init() {
    this.initRateHeader();
    this.initTabs();
    this.initQuickSelector();
    
    // 初始化子模組
    BarcodeScannerManager.init();
    CrossBorderComparator.init();
    DomesticDrugComparator.init();
    BasketOptimizer.init();
    if (window.GoogleSheetSync) {
      GoogleSheetSync.init();
    }

    // 預設載入一筆跨國商品
    if (window.SAMPLE_PRODUCTS && window.SAMPLE_PRODUCTS.length > 0) {
      CrossBorderComparator.loadProduct(window.SAMPLE_PRODUCTS[0]);
    }
  },

  getCurrentTab() {
    return this.currentTab;
  },

  // 匯率狀態欄初始化
  initRateHeader() {
    const rateDisplay = document.getElementById("header-rate-val");
    const rateInput = document.getElementById("header-rate-input");
    const editBtn = document.getElementById("btn-edit-rate");
    const refreshBtn = document.getElementById("btn-refresh-rate");

    const updateDisplay = (rate) => {
      rateDisplay.textContent = rate.toFixed(4);
      rateInput.value = rate.toFixed(4);
    };

    updateDisplay(CurrencyManager.getRate());

    if (editBtn) {
      editBtn.addEventListener("click", () => {
        const newRate = prompt("請輸入自訂匯率 (1 JPY 換算 TWD，例如 0.215):", CurrencyManager.getRate());
        if (newRate) {
          const val = CurrencyManager.setRate(newRate);
          updateDisplay(val);
          CrossBorderComparator.calculate();
          if (DomesticDrugComparator.selectedProductId) {
            DomesticDrugComparator.renderComparisonDetail(DomesticDrugComparator.selectedProductId);
          }
          BasketOptimizer.calculateOptimalStore();
        }
      });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener("click", async () => {
        refreshBtn.classList.add("animate-spin");
        const rate = await CurrencyManager.fetchLiveRate();
        updateDisplay(rate);
        refreshBtn.classList.remove("animate-spin");
        CrossBorderComparator.calculate();
        if (DomesticDrugComparator.selectedProductId) {
          DomesticDrugComparator.renderComparisonDetail(DomesticDrugComparator.selectedProductId);
        }
        BasketOptimizer.calculateOptimalStore();
      });
    }
  },

  // 3 大 Tab 切換
  initTabs() {
    const tabCb = document.getElementById("tab-cross-border");
    const tabDrug = document.getElementById("tab-domestic-drug");
    const tabOpt = document.getElementById("tab-optimizer");

    const viewCb = document.getElementById("view-cross-border");
    const viewDrug = document.getElementById("view-domestic-drug");
    const viewOpt = document.getElementById("view-optimizer");

    const tabs = [
      { id: "cross-border", btn: tabCb, view: viewCb },
      { id: "domestic-drug", btn: tabDrug, view: viewDrug },
      { id: "optimizer", btn: tabOpt, view: viewOpt }
    ];

    this.switchTab = (targetId) => {
      this.currentTab = targetId;
      tabs.forEach(t => {
        if (t.id === targetId) {
          t.btn.classList.add("text-white", "border-white", "font-bold");
          t.btn.classList.remove("text-indigo-200", "border-transparent");
          t.view.classList.remove("hidden");
        } else {
          t.btn.classList.remove("text-white", "border-white", "font-bold");
          t.btn.classList.add("text-indigo-200", "border-transparent");
          t.view.classList.add("hidden");
        }
      });

      if (targetId === "optimizer") {
        BasketOptimizer.calculateOptimalStore();
      }
    };

    if (tabCb) tabCb.addEventListener("click", () => this.switchTab("cross-border"));
    if (tabDrug) tabDrug.addEventListener("click", () => this.switchTab("domestic-drug"));
    if (tabOpt) tabOpt.addEventListener("click", () => this.switchTab("optimizer"));
  },

  // 跨國比價快速選擇示範商品
  initQuickSelector() {
    const container = document.getElementById("cb-quick-samples");
    if (!container || !window.SAMPLE_PRODUCTS) return;

    // 只取跨國品牌 (UNIQLO, MUJI, NITORI)
    const samples = window.SAMPLE_PRODUCTS.filter(p => ["UNIQLO", "MUJI", "NITORI"].includes(p.brand));
    container.innerHTML = samples.map(p => `
      <button onclick='CrossBorderComparator.loadProduct(${JSON.stringify(p).replace(/'/g, "&#39;")})'
        class="flex-shrink-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:border-indigo-500 text-xs text-left shadow-sm transition">
        <span class="font-bold text-gray-800">[${p.brand}]</span>
        <span class="text-gray-600 truncate max-w-[120px] inline-block align-bottom ml-1">${p.name}</span>
      </button>
    `).join("");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

window.App = App;
