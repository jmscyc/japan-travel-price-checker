# 🍢 全台夜市 x 行動支付優惠即時通 (All-in-GitHub + Telegram)

專為台灣夜市與商圈打造的**行動支付優惠追蹤神器**！自動追蹤街口支付、台灣Pay、LINE Pay、全支付、悠遊付等各大夜市最新吃喝回饋，具備**即時額滿檢驗**與 **Telegram 自動通知**。

👉 **線上即時成果網址：** [https://jmscyc.github.io/taiwan-nightmarket-pay/](https://jmscyc.github.io/taiwan-nightmarket-pay/)

---

## 🤖 給 AI 改版指南（以後改版看這裡！）

為了讓你日後**最方便下載檔案直接丟給 AI 改版**，本專案已完成**極致單一檔案架構 (Monolithic Single-File Architecture)** 收斂，重點功能**不拆碎**：

### 📌 改版時你只需要下載這 2 個檔案：

| 改版目標 | 要下載的唯一檔案 | 說明 |
| :--- | :--- | :--- |
| **🎨 改介面 / 加功能 / 調整排版** | **`index.html`** | **前端所有邏輯都在這一個檔案內！** 包含所有 HTML 結構、Tailwind CSS、雙分頁排行榜/搜尋切換、縣市篩選、回饋率計算、複製分享 Toast。丟這一個檔案給 AI 即可完成所有網頁與手機端改版。 |
| **⚙️ 改爬蟲 / 改額滿判定 / 改推播** | **`scripts/scan_and_notify.py`** | **後端所有自動化邏輯都在這一個檔案內！** 包含網頁爬蟲、額滿/終止關鍵字判定、Telegram 訊息推播格式、資料庫回寫。丟這一個檔案給 AI 即可調整後台排程邏輯。 |

> 💡 **資料檔備註**：若要手動新增或修改夜市優惠內容，直接編輯 `data/promotions.json` 即可。

---

## 🌟 核心特色功能

1. **🏆 預設首頁：回饋排行榜 (預設台北市)**：
   - 打開即看到台北市最高回饋排行（例如：士林夜市台灣Pay 20%）。
   - 僅展示「🟢 尚有名額」的進行中項目，自動排除額滿與過期活動。
   - 具備 🥇 冠軍、🥈 亞軍、🥉 季軍視覺標籤。
   - 剩餘天數 $\le 3$ 天自動標示 `⏳ 剩 X 天` 倒數提醒。
   - 支援依縣市（台北/新北/台中/高雄/花蓮/全部）或指定夜市快速篩選。

2. **🔍 夜市搜尋與額滿監控**：
   - 即時關鍵字搜尋夜市名稱（寧夏、士林、逢甲、六合等）或支付工具。
   - 保留「⚠️ 已額滿」項目並清楚標記官方公告，避免現場白跑一趟。

3. **📋 一鍵複製攻略**：
   - 點擊卡片「📋 複製分享」，自動將該夜市名稱、支付方式與結帳規則排版成簡潔訊息，方便直接貼到 LINE 聊天室跟朋友約攤！

4. **📲 Telegram 即時推播**：
   - 當排程偵測到「新優惠上架」或「活動名額剛好額滿」，自動發送帶有直達按鈕的 Telegram 警報。

---

## 🚀 部署與設定指引

### 1. 啟用 GitHub Pages (手機網頁)
1. 進入 Repo -> **Settings** -> **Pages**。
2. **Branch** 選擇 `master`，目錄選擇 `/(root)`，點擊 **Save**。
3. 手機 Safari (iPhone) 或 Chrome (Android) 開啟網址，點擊「加入主畫面」即可全螢幕秒開。

### 2. 設定 Telegram 自動通知 (可選)
1. Telegram 搜尋 `@BotFather` 輸入 `/newbot` 建立機器人取得 Token。
2. Telegram 搜尋 `@userinfobot` 傳送任一訊息取得 Chat ID。
3. 進入 GitHub Repo -> **Settings** -> **Secrets and variables** -> **Actions**，新增：
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`

---

## 🛠️ 本地測試指令

```bash
# 執行單元測試
python3 -m unittest discover tests

# 執行爬蟲與額滿檢驗
python3 scripts/scan_and_notify.py

# 本機預覽網頁
python3 -m http.server 8000
```
