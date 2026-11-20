# ✈️ 出國血拚即時比價助手 (GitHub Pages 部署指南)

專為出國（日本）血拚打造的行動優先比價 Web App。支援手機瀏覽器、相機條碼掃描、跨國品牌比價、藥妝多店巡禮比價與即時活動優惠。

---

## 🌟 核心特色功能

1. **🌏 跨國比價 (台日對照 - UNIQLO / MUJI / 宜得利 等)**：
   - 掃描標籤條碼或型號，自動調出日本原價與台灣專櫃售價。
   - 支援計算 **退稅 10%**、**外國人額外折價券 (5%~10%)**、**信用卡海外回饋 (3%~4.5%)**。
   - 即時計算活動後台幣入手價、與台灣官網價差百分比以及為你省下的金額。
   - 提供台日官方搜尋直達連結，隨時查驗最新價格與尺寸貨量。

2. **💊 日本藥妝多店巡禮比價 (唐吉訶德 / 松本清 / 大國 / Sundrug 等)**：
   - 掃描藥妝條碼，自動帶出商品與照片。
   - 逛到哪間店，直接點選店家並輸入日幣價格（含稅/未稅），秒速儲存。
   - 自動生成 **「巡店價格紀錄總表」**，依未稅基準由低到高自動排序，一秒抓出誰是最低價冠軍！
   - 即時換算台幣，標示現省金額。
   - 頂部內建各大藥妝店最新折扣券與活動情報一覽，隨時點擊領券。

3. **📱 行動裝置體驗優化**：
   - 支援呼叫手機後置鏡頭秒掃條碼（支援 EAN-13、JAN、QR Code）。
   - LocalStorage 本地儲存：藥妝店地下室訊號弱也能順暢記錄與查詢，不遺失數據。
   - 支援加入手機主畫面（PWA 體驗）。

---

## 🚀 部署至 GitHub Pages 步驟 (超簡單 3 分鐘)

1. **建立 GitHub Repository**：
   - 到 [GitHub.com](https://github.com) 登入並點擊 **New Repository**。
   - 名稱可以取作 `japan-price-checker` 或任何你喜歡的名字，並設定為 **Public**。

2. **推動程式碼到 GitHub**：
   在終端機執行：
   ```bash
   git add .
   git commit -m "feat: initial commit for travel price checker"
   git branch -M main
   git remote add origin https://github.com/<你的GitHub帳號>/<你的Repo名稱>.git
   git push -u origin main
   ```

3. **啟用 GitHub Pages**：
   - 進入該 Repo 的 **Settings** -> 左側選單點擊 **Pages**。
   - 在 **Build and deployment** 下的 **Branch**，選擇 `main` 分支與 `/(root)` 目錄，按 **Save**。
   - 約 1 分鐘後，GitHub 會為你產生專屬網址：
     `https://<你的GitHub帳號>.github.io/<你的Repo名稱>/`

4. **在手機上使用與加入主畫面**：
   - 用手機 Safari (iPhone) 或 Chrome (Android) 打開該網址。
   - **iPhone (Safari)**：點擊下方「分享」按鈕 -> 選擇「加入主畫面」。
   - **Android (Chrome)**：點擊右上角「三個點」 -> 選擇「加到主畫面」或「安裝應用程式」。
   - 完成後就像原生 App 一樣，出國打開點右下角「掃描條碼」立刻比價！
