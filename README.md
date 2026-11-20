# 🍢 全台夜市 x 行動支付優惠即時通 (All-in-GitHub + Telegram)

專為台灣夜市吃喝愛好者設計的**行動支付優惠追蹤神器**！自動盤點各大行動支付（街口、台灣Pay、LINE Pay、全支付、悠遊付等）於各大夜市的最新回饋活動，並具備**即時額滿檢驗**與 **Telegram 自動警報通知**。

---

## 🌟 核心特色

1. **📱 手機原生體驗 (GitHub Pages + PWA)**：
   - 專為手機瀏覽設計，支援 iPhone / Android 「加入主畫面」，就像原生 App 一樣打開即用。
   - 快速篩選夜市（寧夏、士林、逢甲、六合...）、支付方式（街口、台灣Pay、LINE Pay...）。
   
2. **⚠️ 獨家「名額額滿 / 提早結束」標籤**：
   - 到夜市最怕看到回饋，結帳才發現預算已被搶光！
   - 系統將狀態分為：
     - 🟢 **尚有名額 (ACTIVE)**
     - ⚠️ **已額滿 (FULL)**：標註官方額滿公告日期與警示，保留在清單中提醒使用者勿白跑。
     - ⚪ **已結束 (EXPIRED)**：活動日期過期。

3. **☁️ 0 伺服器、0 資料庫 (All-in-GitHub)**：
   - 所有資料存放在 `data/promotions.json`。
   - GitHub Actions 每日定時在雲端啟動爬蟲與狀態驗證，自動 commit 更新資料，你完全不需要開著電腦。

4. **📲 Telegram 即時推播**：
   - 發現「全新夜市優惠」或活動「剛額滿」時，立即發送 Telegram 訊息到你的手機。

---

## 🚀 部署教學 (只需 3 分鐘)

### 步驟 1：建立 Repository 並推動程式碼
```bash
git add .
git commit -m "feat: Taiwan Night Market payment tracker"
git branch -M main
git remote add origin https://github.com/<你的GitHub帳號>/<你的Repo名稱>.git
git push -u origin main
```

### 步驟 2：開啟 GitHub Pages (手機網址)
1. 進入你的 GitHub Repo 頁面，點擊 **Settings** -> **Pages**。
2. 在 **Branch** 選擇 `main`，資料夾選擇 `/(root)`，點擊 **Save**。
3. 稍等約 1 分鐘，即可獲得手機專屬網址：
   `https://<你的GitHub帳號>.github.io/<你的Repo名稱>/`
4. **手機開啟**：
   - **iPhone (Safari)**：點擊下方「分享」圖示 -> 選擇「加入主畫面」。
   - **Android (Chrome)**：點擊右上角三點 -> 選擇「加到主畫面」。

### 步驟 3：設定 Telegram 自動通知 (可選但推薦)
1. 在 Telegram 搜尋 `@BotFather`，輸入 `/newbot` 建立機器人，取得 `HTTP API Token`。
2. 搜尋 `@userinfobot` 傳送任何訊息，取得你的 `Id`（Chat ID）。
3. 進入 GitHub Repo -> **Settings** -> **Secrets and variables** -> **Actions**，新增兩組 Repository secrets：
   - `TELEGRAM_BOT_TOKEN`: 你的 Bot Token
   - `TELEGRAM_CHAT_ID`: 你的 Chat ID
4. 以後每次 GitHub Actions 跑完，一旦有夜市活動額滿或新增活動，你的 Telegram 就會立刻收到警報！

---

## 🛠️ 本地測試與執行

- **執行掃描與額滿驗證腳本**：
  ```bash
  python3 scripts/scan_and_notify.py
  ```
- **執行單元測試**：
  ```bash
  python3 -m unittest tests/test_scanner.py
  ```
- **本機啟動網頁預覽**：
  ```bash
  python3 -m http.server 8000
  ```
