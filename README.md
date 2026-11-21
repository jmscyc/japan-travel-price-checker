# ✈️ 出國血拚即時比價助手 (Japan Travel Price Comparator & Optimizer)

專為出國旅遊（以日本為主）血拚設計的手機 PWA 比價與優惠計算神器。免安裝任何 App，打開手機瀏覽器就能直接使用！

---

## 📱 怎麼開始使用？從哪裡開啟？（最快上手指南）

### 🌐 線上直接開啟網址
只要在手機瀏覽器（iPhone 的 Safari、Android 的 Chrome）輸入您的專屬網址即可秒開：
👉 **`https://jmscyc.github.io/japan-travel-price-checker/`**

> ⚠️ **若尚未開啟網頁發布**：請至 GitHub 儲存庫的 [Settings ➔ Pages](https://github.com/jmscyc/japan-travel-price-checker/settings/pages)，在 **Branch** 選擇 `main`，資料夾選 `/(root)` 並按 **Save** 即可！

---

### 📲 強烈推薦：加入手機主畫面（像原生 App 一樣全螢幕秒開）

本工具支援 **PWA 漸進式網頁應用技術**，強烈建議在出國前加入主畫面，在**地下室、商場深處或飛機上無網路時也能順暢使用**：

1. **iPhone (Safari 瀏覽器)**：
   - 用 Safari 打開上述網址。
   - 點擊螢幕下方正中央的 **「分享」** 按鈕（方框帶向上箭頭 ⎋）。
   - 向下滑動找到並點擊 **「加入主畫面 (Add to Home Screen)」**。
   - 桌面就會出現一個漂亮的「比價神器」App 圖示！

2. **Android (Chrome 瀏覽器)**：
   - 用 Chrome 打開上述網址。
   - 點擊右上角「**⋮**」（三個點選單）。
   - 點選 **「安裝應用程式」** 或 **「加到主畫面」** 即可。

---

## 🌟 三大核心功能操作教學

### 1. 🌏 跨國即時比價 (UNIQLO / 無印良品 / GU / 宜得利)
- **進入方式**：點擊頂部第一個 Tab「🌏 跨國比價」。
- **怎麼用**：
  1. **🎯 鎖定比價官方網站（強烈推薦！）**：
     - 若您在無印良品或 UNIQLO 逛街，可直接點擊「常用網站快速鎖定」的「無印良品」或「UNIQLO」按鈕，也可以貼上任何您找到的台日官網網址。
     - 鎖定後，後續**所有掃描的條碼都會自動鎖定該品牌官網進行精確比對**，大幅縮小範圍！
  2. **📷 掃描條碼**：對準衣服、標籤吊牌上的 EAN 條碼（或點擊上方熱門商品示範）。
  3. **💳 信用卡回饋快選**：提供富邦J/吉鶴 3%、Cube 3.3%、雙幣 4.5%、神卡 5% 快捷按鈕。
  4. **🗑️ 刪除查過紀錄**：點擊右上角「🗑️ 刪除此筆」，隨時清除比價資料回到乾淨狀態。
  5. **ℹ️ 支援哪些店家？**：點擊「支援查詢哪些店家？」，隨時查看完整連鎖店與比價覆蓋清單。

### 2. 💊 日本藥妝多店巡禮記帳 (松本清 / 唐吉 / 大國 / Sundrug)
- **進入方式**：點擊頂部第二個 Tab「💊 藥妝巡店」。
- **怎麼用**：
  1. 掃描或點擊「＋手動新增」要比價的藥妝品項（如合利他命、EVE、休足時間）。
  2. 每走進一間店，在下方輸入該店價格。
  3. **💡 店家稅制防呆**：選「大國藥妝」時，系統會自動提醒紅字為未稅價並取消含稅勾選；選「唐吉訶德」會提示黑字為含稅、紅字為未稅。
  4. **📷 拍貨架標籤**：點擊「拍貨架標籤」直拍價格牌存證，在下一間店可隨時點開對照規格與容量防看錯！
  5. **🗑️ 靈活刪除功能**：
     - **刪除單一店家的報價**：在巡店表格中點擊各店家右側的「✕」即可刪除。
     - **刪除單一商品**：點擊卡片右上角「刪除商品」。
     - **批次刪除 / 一鍵清空**：點擊上方「🗑️ 批次刪除」，可多選商品勾選刪除，或點「全部清空」。
  6. **📤 備份 / 📥 匯入**：提供 JSON 檔匯出與合併功能，同行朋友分頭逛街也能互相同步比價清單！

### 3. 🛒 總額神省最佳店家算盤 (全日本連鎖藥妝)
- **進入方式**：點擊頂部第三個 Tab「🛒 最佳店家試算」。
- **怎麼用**：
  1. 隨意勾選購物品項或在上方直接輸入預算日圓（如 15,000 円）。
  2. 系統會顯示 **🎌 日本免稅 5,000 円進度條 (需未稅滿額)**，並自動套用各大藥妝店的滿額階梯券（滿 1 萬折 3%~5%、滿 3 萬折 5%~7%、滿 5 萬折 7%~8%）。
  3. 頂部直接跳出 **🥇 冠軍推薦 Banner**，告訴你去哪一間店總花費最少、還差多少日圓能解鎖下一階折扣！
  4. 點擊 **「🧾 匯出請款單」**，一鍵將日幣明細與折合台幣複製到剪貼簿，直接在 LINE 傳給親友請款！
  5. 點擊 **「清空」** 可一鍵重置購物清單。

---

## 🏪 目前內建支援查詢的店家有哪些？

| 分類 | 支援品牌 / 連鎖店 | 支援特色與功能 |
| :--- | :--- | :--- |
| **跨國生活與服飾** | **無印良品 (MUJI)** | 支援台灣與日本官方網站條碼反查、無印良品週間 10% 折扣計算。 |
| | **UNIQLO (優衣庫)** | 支援 6 位數貨號、EAN 吊牌條碼跨國查詢、感謝祭活動比價。 |
| | **GU** | 支援台灣/日本 GU 吊牌條碼與官網價格搜尋。 |
| | **宜得利家居 (NITORI)** | 支援涼感系列、收納用品台日價差與官方商品搜尋。 |
| **日本連鎖藥妝** | **松本清 (Matsukiyo)** | 支援多店價格記錄、貨架照存證、滿萬 3% / 滿 3 萬 5% / 滿 5 萬 7% 優惠券折算。 |
| | **唐吉訶德 (驚安殿堂 Donki)** | 支援黑字含稅/紅字未稅防呆提醒、滿萬現折 5%~7% 試算。 |
| | **大國藥妝 (Daikoku)** | 支援醒目未稅防呆提醒、滿 5,000 円即享額外 3% 折扣試算。 |
| | **Sundrug (尚都樂客)** | 支援多店價格記錄與滿額階梯優惠券。 |
| **連鎖電器** | **Bic Camera / Yodobashi** | 支援免稅 10% + 7% 滿額折價券試算。 |
| **自訂全網官網** | **任何官方網站** | 🎯 **獨創官網鎖定功能**：可自由貼上任何品牌台日網址，條碼掃描立即鎖定該網站搜尋！ |

---

## ☁️ 結合 Google Sheet 雲端同步與權限（跨裝置 & 旅伴協作）

本工具提供**純個人、零隱私疑慮**的 Google 試算表雙向同步功能！資料不經由任何第三方伺服器，直接存在您個人的 Google 雲端硬碟中！

### 🎯 為什麼要結合 Google Sheet？
1. **多裝置查閱**：白天在商場用手機記帳，晚上回飯店用 iPad 或筆電打開 Google 試算表看大表！
2. **旅伴即時共筆**：同行朋友各自在手機輸入同一個 Google Web App 網址，各店查價數據即時彙整到同一張表！
3. **換機/重整不遺失**：隨時一鍵「📥 從雲端還原」，1 秒找回所有商品、條碼與歷史報價！
4. **自動產出兩份工作表**：
   - **`藥妝比價總表`**：排版精美的試算表，包含「商品名稱、條碼、比價店家、日幣標價、稅制、未稅等效、折合台幣、貨架備註、更新時間」。
   - **`_RawData`**：完整結構資料庫，作為換手機時的無損還原備份。

---

### ⏱️ 3 步驟免費建立個人專屬 Google 試算表（約 1 分鐘圖文指南）：

#### 步驟 1：建立全新 Google 試算表
- 在電腦或手機瀏覽器打開 [https://sheets.new](https://sheets.new)，建立一份空白試算表。
- 可命名為「我的日本血拚比價表」。

#### 步驟 2：貼上同步專用 Apps Script
- 點擊頂部選單 **「擴充功能」➔「Apps Script」**。
- 清空編輯器裡的代碼，將以下代碼完整貼上並按儲存（或在 App 點「📋 一鍵複製腳本」）：

```javascript
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var rawSheet = ss.getSheetByName("_RawData");
  var rawJson = rawSheet ? rawSheet.getRange(1, 1).getValue() : "{}";
  return ContentService.createTextOutput(rawJson).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var payload = data.payload || {};
    var rows = payload.rows || [];
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. 寫入清晰的「藥妝比價總表」
    var sheetName = "藥妝比價總表";
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    sheet.clear();

    var headers = ["商品名稱", "條碼", "比價店家", "日幣標價", "稅制", "未稅等效", "折合台幣(約)", "貨架備註", "更新時間"];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#4f46e5").setFontColor("#ffffff");

    if (rows.length > 0) {
      var sheetData = rows.map(function(r) {
        return [r.productName, r.barcode, r.storeName, r.priceJpy, r.isTaxIncluded, r.netPriceJpy, r.priceTwd, r.note, r.updatedAt];
      });
      sheet.getRange(2, 1, sheetData.length, headers.length).setValues(sheetData);
    }
    sheet.autoResizeColumns(1, headers.length);

    // 2. 寫入無損備份工作表
    var rawSheet = ss.getSheetByName("_RawData") || ss.insertSheet("_RawData");
    rawSheet.clear();
    rawSheet.getRange(1, 1).setValue(JSON.stringify(payload));

    return ContentService.createTextOutput(JSON.stringify({ status: "success", count: rows.length })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

#### 步驟 3：發布為 Web App（⚠️ 權限設定關鍵！）
1. 點擊 Apps Script 編輯器右上角的 **「部署」➔「新增部署作業」**。
2. 點左邊齒輪圖示 ⚙️，選擇 **「網頁應用程式 (Web App)」**。
3. **重要權限設定**：
   - **執行身分**：選擇 **「我 (Me)」**。
   - **誰可以存取**：務必選擇 **「任何人 (Anyone)」**（這樣手機才能免登入直接雙向同步！）。
4. 點擊 **「部署」**，若彈出權限審查，點擊「進階 (Advanced)」➔「前往專案 (Go to Project)」並允許即可。
5. 複製生成的 **「網頁應用程式網址 (Web App URL)」**（開頭為 `https://script.google.com/macros/s/.../exec`）。
6. 回到比價助手 App，點擊頂部 **「☁️ 雲端同步」**，貼上網址並點擊 **「儲存網址」**！
7. 勾選 **「記帳時自動背景同步」**，之後每次記帳就會自動默默同步至您的 Google 試算表！

---

### 🔑 換設備不用再打字！「專屬金鑰 888」與「一鍵秒同步網址」

換新手機、iPad 或傳給同行旅伴時，**完全不需要再複製貼上落落長的 Google 網址**：

1. **方式 1：一鍵複製秒同步網址（最推薦！）**
   - 在已綁定好的手機上，點開「☁️ 雲端同步」。
   - 點擊 **「🔗 複製秒同步網址」**，用 LINE 或 AirDrop 傳給其他裝置。
   - 任何新裝置**點開這個網址，系統會自動辨識並秒級完成綁定**，連 1 秒鐘都不用手動設定！
2. **方式 2：專屬金鑰 888 直通**
   - 預設金鑰為 `888`。
   - 亦可直接開啟直通連結：`https://jmscyc.github.io/japan-travel-price-checker/?key=888`，新裝置將自動識別並連接您的專屬同步頻道！

---

## 🤖 給未來的自己 / 給 AI 改版指南（重點速查！）

未來如果想升級功能、修改排版或讓其他 AI（ChatGPT / Claude / Gemini）進行改版，**只需要下載並提供以下 2 個檔案**：

| 檔案路徑 | 檔案說明 | 給 AI 說明 |
| :--- | :--- | :--- |
| **`index.html`** | 完整的單一手機前端畫面 | 凡是想要改畫面排版、顏色樣式、增加按鈕，直接給這個檔案。 |
| **`js/app.bundle.js`** | **全部核心功能單一整合檔** | 包含匯率、相機條碼掃描、跨國退稅演算法、藥妝多店記帳、照片壓縮、滿額折扣試算等所有邏輯。 |

> 💬 **給 AI 的指令範本**：  
> *「這是我出國比價工具的 `index.html` 與 `js/app.bundle.js`，請幫我新增 [XXX 功能]，並直接輸出修改後的代碼。」*
