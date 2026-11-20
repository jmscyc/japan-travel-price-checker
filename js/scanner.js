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
      // 搜尋預置庫
      const product = window.SAMPLE_PRODUCTS.find(p => p.barcode === barcode || p.code === barcode);
      if (product) {
        CrossBorderComparator.loadProduct(product);
      } else {
        // 未在範例庫中，建立自訂商品項目
        const customProd = {
          barcode: barcode,
          name: `商品 (條碼: ${barcode})`,
          brand: "自訂/日本品牌",
          image: "https://placehold.co/400x400?text=掃描商品",
          jpPrice: 1000,
          twPrice: 350,
          jpCampaign: "請手動輸入店內標價",
          jpDiscountPrice: 1000,
          twCampaign: "請確認台灣官網",
          twDiscountPrice: 350
        };
        CrossBorderComparator.loadProduct(customProd);
      }
    } else {
      // 日本藥妝比價
      DomesticDrugComparator.handleScannedBarcode(barcode);
    }
  }
};

window.BarcodeScannerManager = BarcodeScannerManager;
