// 應用程式核心控制器
const App = {
  currentTab: "cross-border", // "cross-border" | "domestic-drug"

  init() {
    this.initRateHeader();
    this.initTabs();
    this.initQuickSelector();
    
    // 初始化子模組
    BarcodeScannerManager.init();
    CrossBorderComparator.init();
    DomesticDrugComparator.init();

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
      });
    }
  },

  // Tab 切換
  initTabs() {
    const tabCb = document.getElementById("tab-cross-border");
    const tabDrug = document.getElementById("tab-domestic-drug");
    const viewCb = document.getElementById("view-cross-border");
    const viewDrug = document.getElementById("view-domestic-drug");

    const switchTab = (tab) => {
      this.currentTab = tab;
      if (tab === "cross-border") {
        tabCb.classList.add("text-indigo-600", "border-indigo-600", "font-bold");
        tabCb.classList.remove("text-gray-500", "border-transparent");
        tabDrug.classList.remove("text-indigo-600", "border-indigo-600", "font-bold");
        tabDrug.classList.add("text-gray-500", "border-transparent");

        viewCb.classList.remove("hidden");
        viewDrug.classList.add("hidden");
      } else {
        tabDrug.classList.add("text-indigo-600", "border-indigo-600", "font-bold");
        tabDrug.classList.remove("text-gray-500", "border-transparent");
        tabCb.classList.remove("text-indigo-600", "border-indigo-600", "font-bold");
        tabCb.classList.add("text-gray-500", "border-transparent");

        viewDrug.classList.remove("hidden");
        viewCb.classList.add("hidden");
      }
    };

    if (tabCb && tabDrug) {
      tabCb.addEventListener("click", () => switchTab("cross-border"));
      tabDrug.addEventListener("click", () => switchTab("domestic-drug"));
    }
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
