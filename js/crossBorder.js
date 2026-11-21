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
