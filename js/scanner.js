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
