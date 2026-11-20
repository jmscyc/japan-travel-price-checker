// 匯率管理與計算工具
const CurrencyManager = {
  DEFAULT_RATE: 0.215, // 1 JPY = 0.215 TWD
  STORAGE_KEY: "travel_price_rate",

  getRate() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved && !isNaN(parseFloat(saved))) {
      return parseFloat(saved);
    }
    return this.DEFAULT_RATE;
  },

  setRate(rate) {
    const val = parseFloat(rate);
    if (!isNaN(val) && val > 0) {
      localStorage.setItem(this.STORAGE_KEY, val);
      return val;
    }
    return this.DEFAULT_RATE;
  },

  async fetchLiveRate() {
    try {
      // 透過公開免費 API 獲取即時日圓對台幣匯率
      const res = await fetch("https://open.er-api.com/v6/latest/JPY");
      if (res.ok) {
        const data = await res.json();
        if (data && data.rates && data.rates.TWD) {
          const rate = parseFloat(data.rates.TWD.toFixed(4));
          this.setRate(rate);
          return rate;
        }
      }
    } catch (e) {
      console.warn("無法取得即時匯率，使用本機儲存或預設值", e);
    }
    return this.getRate();
  },

  jpyToTwd(jpy, rate = null) {
    const r = rate !== null ? rate : this.getRate();
    return Math.round(jpy * r);
  }
};

window.CurrencyManager = CurrencyManager;
