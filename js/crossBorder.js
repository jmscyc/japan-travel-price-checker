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

    // 設定外部連結按鈕
    const twSearchBtn = document.getElementById("cb-link-tw");
    const jpSearchBtn = document.getElementById("cb-link-jp");
    
    const query = encodeURIComponent(product.name || product.code || "");
    if (twSearchBtn) {
      twSearchBtn.href = product.twSearchUrl ? `${product.twSearchUrl}${encodeURIComponent(product.code || product.name)}` : `https://www.google.com/search?q=${query}+台灣價格`;
    }
    if (jpSearchBtn) {
      jpSearchBtn.href = product.jpSearchUrl ? `${product.jpSearchUrl}${encodeURIComponent(product.code || product.name)}` : `https://www.google.com/search?q=${query}+日本価格`;
    }

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
