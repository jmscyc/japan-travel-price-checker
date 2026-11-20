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
