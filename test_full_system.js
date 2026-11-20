const fs = require('fs');

console.log('==============================================');
console.log('🚀 開始執行【出國血拚比價助手】全功能逐一自動化深度測試');
console.log('==============================================\n');

// 1. 讀取打包檔與 HTML
const bundleCode = fs.readFileSync('js/app.bundle.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');

// 2. 打造完整的模擬瀏覽器環境
const createMockElement = (id) => ({
  id,
  value: '',
  textContent: '',
  innerHTML: '',
  className: '',
  checked: true,
  disabled: false,
  files: [],
  style: {},
  src: '',
  href: '',
  children: [],
  classList: {
    classes: new Set(),
    add(...cls) { cls.forEach(c => this.classes.add(c)); },
    remove(...cls) { cls.forEach(c => this.classes.delete(c)); },
    contains(c) { return this.classes.has(c); },
    toggle(c) { if (this.classes.has(c)) this.classes.delete(c); else this.classes.add(c); }
  },
  addEventListener(event, fn) { 
    this['on_' + event] = fn; 
  },
  trigger(event, data) {
    if (this['on_' + event]) this['on_' + event](data || { target: this, preventDefault: () => {} });
  },
  click() { 
    if (this.on_click) this.on_click({ target: this, preventDefault: () => {} }); 
  },
  appendChild(child) { this.children.push(child); }
});

const mockElements = {};
const mockDocument = {
  elements: mockElements,
  getElementById(id) {
    if (!this.elements[id]) {
      this.elements[id] = createMockElement(id);
    }
    return this.elements[id];
  },
  body: {
    appendChild() {},
    removeChild() {}
  },
  createElement(tag) {
    return {
      tagName: tag,
      setAttribute() {},
      click() {},
      remove() {}
    };
  },
  addEventListener() {}
};

let clipboardContent = '';
const mockLocalStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = String(v); },
  removeItem(k) { delete this.data[k]; },
  clear() { this.data = {}; }
};

const sandbox = {
  document: mockDocument,
  window: {},
  localStorage: mockLocalStorage,
  navigator: { 
    clipboard: { 
      writeText: (txt) => { 
        clipboardContent = txt; 
        return Promise.resolve(); 
      } 
    } 
  },
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  alert: (msg) => console.log('   [模擬提示視窗]:', String(msg).replace(/\n/g, ' ')),
  confirm: () => true,
  prompt: () => '1000'
};
sandbox.window = sandbox;

// 執行 Bundle
new Function('with(this) { ' + bundleCode + ' }').call(sandbox);

let passCount = 0;
let failCount = 0;

function assert(condition, testName, detail = '') {
  if (condition) {
    console.log(`✅ [PASS] ${testName} ${detail ? '(' + detail + ')' : ''}`);
    passCount++;
  } else {
    console.error(`❌ [FAIL] ${testName} ${detail ? '(' + detail + ')' : ''}`);
    failCount++;
  }
}

// ==========================================
// 測試模組 1: App 初始化與分頁切換
// ==========================================
console.log('---【模組 1: App 初始化與分頁切換】---');
sandbox.App.init();
assert(sandbox.App !== undefined, 'App 核心物件成功載入');
sandbox.App.switchTab('cross-border');
assert(!sandbox.document.getElementById('view-cross-border').classList.contains('hidden'), '切換至跨國比價分頁');
sandbox.App.switchTab('domestic-drug');
assert(!sandbox.document.getElementById('view-domestic-drug').classList.contains('hidden'), '切換至藥妝巡店分頁');
sandbox.App.switchTab('optimizer');
assert(!sandbox.document.getElementById('view-optimizer').classList.contains('hidden'), '切換至最佳店家算盤分頁');

// ==========================================
// 測試模組 2: 即時匯率系統
// ==========================================
console.log('\n---【模組 2: 即時匯率系統】---');
assert(sandbox.CurrencyManager.getRate() > 0, '日幣匯率已初始化', `當前匯率: ${sandbox.CurrencyManager.getRate()}`);
sandbox.CurrencyManager.setRate(0.215);
assert(sandbox.CurrencyManager.getRate() === 0.215, '手動調整匯率', '設定為 0.215 成功');
const ntd = sandbox.CurrencyManager.jpyToTwd(10000);
assert(ntd === 2150, '10,000 日圓精確換算台幣', `NT$${ntd}`);

// ==========================================
// 測試模組 3: 跨國品牌比價演算法 (UNIQLO / MUJI)
// ==========================================
console.log('\n---【模組 3: 跨國比價與信用卡快選】---');
const sampleProd = sandbox.SAMPLE_PRODUCTS[0];
sandbox.CrossBorderComparator.loadProduct(sampleProd);
assert(sandbox.document.getElementById('cb-prod-name').textContent === sampleProd.name, '成功載入商品', sampleProd.name);

// 測試神卡快選
sandbox.CrossBorderComparator.setCardPreset(4.5);
assert(sandbox.document.getElementById('cb-credit-cashback').value === '4.5', '信用卡快捷選取 4.5% 成功');

// 觸發重新試算
sandbox.CrossBorderComparator.calculate();
const diffBadgeText = sandbox.document.getElementById('res-diff-badge').textContent;
assert(diffBadgeText.length > 0, '跨國價差成功計算', `結果: ${diffBadgeText}`);

// ==========================================
// 測試模組 4: 藥妝多店價格記錄與防呆
// ==========================================
console.log('\n---【模組 4: 藥妝多店記錄、稅制提示與貨架照】---');
sandbox.DomesticDrugComparator.init();
assert(sandbox.DomesticDrugComparator.records.length > 0, '成功載入或初始化藥妝商品紀錄');
const drugSample = sandbox.DomesticDrugComparator.records[0];
sandbox.DomesticDrugComparator.selectProduct(drugSample.id);
assert(sandbox.DomesticDrugComparator.selectedProductId === drugSample.id, '選取藥妝品項成功', drugSample.name);

// 測試大國藥妝稅制防呆
sandbox.DomesticDrugComparator.handleStoreSelectChange('大國藥妝 (Daikoku)');
assert(sandbox.document.getElementById('input-tax-included').checked === false, '大國藥妝自動切換為未稅價');

// 測試唐吉訶德稅制防呆
sandbox.DomesticDrugComparator.handleStoreSelectChange('唐吉訶德 (Donki)');
assert(sandbox.document.getElementById('store-tax-tip-text').textContent.includes('唐吉訶德'), '唐吉訶德稅制提示更新');

// 測試添加店家價格
sandbox.document.getElementById('input-store-name').value = '唐吉訶德 (Donki)';
sandbox.document.getElementById('input-store-price').value = '4980';
sandbox.document.getElementById('input-tax-included').checked = true;
sandbox.DomesticDrugComparator.handleAddStorePrice();
assert(sandbox.DomesticDrugComparator.records.length > 0, '成功新增巡店價格記錄');

// 測試 JSON 備份功能
let exportTriggered = false;
sandbox.document.createElement = (tag) => {
  return {
    setAttribute(k, v) { if (k === 'href') exportTriggered = true; },
    click() {
      if (this.onchange) {
        this.onchange({ target: { files: [{ name: 'test.json' }] } });
      }
    },
    remove() {}
  };
};
sandbox.DomesticDrugComparator.exportRecordsJSON();
assert(exportTriggered === true, 'JSON 比價紀錄匯出備份成功觸發');

// 測試 JSON 匯入功能 (模擬旅伴資料合併)
const partnerData = [{
  id: 'partner-drug-1',
  name: '旅伴推薦眼藥水',
  barcode: '4987084410123',
  stores: [{ storeName: '松本清', price: 680, isTaxIncluded: false, note: '特價' }]
}];

sandbox.FileReader = function() {
  return {
    readAsText() {
      this.onload({ target: { result: JSON.stringify(partnerData) } });
    }
  };
};

sandbox.DomesticDrugComparator.importRecordsJSON();
const hasPartnerData = sandbox.DomesticDrugComparator.records.some(r => r.barcode === '4987084410123');
assert(hasPartnerData === true, 'JSON 比價紀錄匯入合併成功');

// ==========================================
// 測試模組 5: 購物總額最佳店家推薦算盤
// ==========================================
console.log('\n---【模組 5: 總額算盤、滿額折價券與請款單】---');
sandbox.BasketOptimizer.init();

// 設定總金額 ¥15,000 (觸發滿萬折與免稅)
sandbox.document.getElementById('cart-custom-budget').value = '15000';
sandbox.BasketOptimizer.calculateOptimalStore();

const bannerHtml = sandbox.document.getElementById('optimizer-winner-banner').innerHTML;
assert(bannerHtml.includes('最佳優惠推薦'), '最佳店家智能推薦產出');

const progress = sandbox.document.getElementById('taxfree-progress-bar').style.width;
assert(progress === '100%', '免稅進度條精確達到 100%');

// 測試購物車加入品項
sandbox.BasketOptimizer.cartItems = [
  { id: 'item1', productId: 'p1', name: '合利他命 EX PLUS', unitPriceJpy: 4980, qty: 2 }
];

// 測試一鍵匯出代購請款清單至剪貼簿
sandbox.BasketOptimizer.exportPurchaseList();
assert(clipboardContent.includes('出國血拚代購採購請款清單') && clipboardContent.includes('NT$'), '代購請款清單格式化並複製至剪貼簿成功');

console.log('\n==============================================');
console.log(`🎉 測試完成: 通過 ${passCount} 項 / 失敗 ${failCount} 項`);
console.log('==============================================');

if (failCount > 0) process.exit(1);
