// 預置熱門商品資料庫與條碼對照表
window.SAMPLE_PRODUCTS = [
  // UNIQLO
  {
    barcode: "2000171234567",
    code: "464024",
    brand: "UNIQLO",
    name: "特級極輕羽絨外套 (男女適穿)",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=400&q=80",
    category: "clothing",
    jpPrice: 6990,
    twPrice: 2490,
    jpCampaign: "感謝祭限定折價 1,000 円",
    jpDiscountPrice: 5990,
    twCampaign: "無特價",
    twDiscountPrice: 2490,
    twSearchUrl: "https://www.uniqlo.com/tw/zh_TW/search.html?description=",
    jpSearchUrl: "https://www.uniqlo.com/jp/ja/search?q="
  },
  {
    barcode: "2000189876543",
    code: "450181",
    brand: "UNIQLO",
    name: "HEATTECH 吸濕發熱衣 (長袖)",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
    category: "clothing",
    jpPrice: 1290,
    twPrice: 590,
    jpCampaign: "限定優惠 2件折 300 円",
    jpDiscountPrice: 990,
    twCampaign: "單件特惠",
    twDiscountPrice: 490,
    twSearchUrl: "https://www.uniqlo.com/tw/zh_TW/search.html?description=",
    jpSearchUrl: "https://www.uniqlo.com/jp/ja/search?q="
  },
  // 無印良品 MUJI
  {
    barcode: "4550182200011",
    code: "G9AA001",
    brand: "MUJI",
    name: "超音波芬香噴霧器 (大)",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80",
    category: "living",
    jpPrice: 6890,
    twPrice: 2590,
    jpCampaign: "無印良品週間 10% OFF",
    jpDiscountPrice: 6201,
    twCampaign: "無特惠",
    twDiscountPrice: 2590,
    twSearchUrl: "https://www.muji.com/tw/products/cmdty/detail/",
    jpSearchUrl: "https://www.muji.com/jp/ja/store/search/cmdty/"
  },
  {
    barcode: "4550002422000",
    code: "M89211",
    brand: "MUJI",
    name: "敏感肌化妝水 (保濕型 400ml)",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    category: "skincare",
    jpPrice: 1190,
    twPrice: 380,
    jpCampaign: "無印良品週間 10% OFF",
    jpDiscountPrice: 1071,
    twCampaign: "任兩件 9 折",
    twDiscountPrice: 342,
    twSearchUrl: "https://www.muji.com/tw/products/cmdty/detail/",
    jpSearchUrl: "https://www.muji.com/jp/ja/store/search/cmdty/"
  },
  // 宜得利 NITORI
  {
    barcode: "4992831200019",
    code: "N-78901",
    brand: "NITORI",
    name: "N-Cool 涼感被 (雙人加大)",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80",
    category: "living",
    jpPrice: 4990,
    twPrice: 1490,
    jpCampaign: "夏末特惠滿千折百",
    jpDiscountPrice: 4490,
    twCampaign: "無特惠",
    twDiscountPrice: 1490,
    twSearchUrl: "https://www.nitori-net.tw/search?q=",
    jpSearchUrl: "https://www.nitori-net.jp/ec/search/?q="
  },
  // 藥妝熱門商品 (常見於唐吉訶德/松本清/大國)
  {
    barcode: "4987123145167",
    code: "AL-270",
    brand: "武田",
    name: "合利他命 EX PLUS 270錠 (アリナミンEX PLUS)",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    category: "medicine",
    jpPrice: 5680,
    twPrice: 2000,
    jpCampaign: "各藥妝店常有促銷或限購2罐特惠",
    jpDiscountPrice: 4980,
    twCampaign: "台灣醫藥品售價約 NT$1,900~2,200",
    twDiscountPrice: 1950,
    twSearchUrl: "https://www.google.com/search?q=%E5%90%88%E5%88%A9%E4%BB%96%E5%91%BD+EX+PLUS+270%E9%89%88+%E5%83%B9%E6%A0%BC",
    jpSearchUrl: "https://www.google.com/search?q=%E3%82%A2%E3%83%AA%E3%83%8A%E3%83%9F%E3%83%B3EX+PLUS+270%E9%8C%A0+%E4%BE%A1%E6%A0%BC"
  },
  {
    barcode: "4987300052717",
    code: "EVE-A",
    brand: "白兔牌",
    name: "EVE 止痛藥 EVE QUICK DX 40錠",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80",
    category: "medicine",
    jpPrice: 1780,
    twPrice: 650,
    jpCampaign: "松本清持券常享 95 折",
    jpDiscountPrice: 1580,
    twCampaign: "代購或藥局參考價",
    twDiscountPrice: 650,
    twSearchUrl: "https://www.google.com/search?q=EVE+QUICK+DX+40%E9%8C%A0",
    jpSearchUrl: "https://www.google.com/search?q=EVE+QUICK+DX+40%E9%8C%A0+%E4%BE%A1%E6%A0%BC"
  },
  {
    barcode: "4903301138884",
    code: "LION-PAIR",
    brand: "獅王 LION",
    name: "PAIR 痘痘藥膏 (24g)",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
    category: "medicine",
    jpPrice: 1080,
    twPrice: 390,
    jpCampaign: "大國藥妝常態特惠價",
    jpDiscountPrice: 880,
    twCampaign: "代購參考價",
    twDiscountPrice: 380,
    twSearchUrl: "https://www.google.com/search?q=PAIR+%E7%97%98%E7%97%98%E8%97%A5+24g",
    jpSearchUrl: "https://www.google.com/search?q=%E3%83%9A%E3%82%A2%E3%82%A2%E3%82%AF%E3%83%8D%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0W+24g+%E4%BE%A1%E6%A0%BC"
  },
  {
    barcode: "4903301026457",
    code: "REST-LEG",
    brand: "獅王 LION",
    name: "休足時間 清涼舒緩貼片 (18枚入)",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80",
    category: "cosmetic",
    jpPrice: 698,
    twPrice: 299,
    jpCampaign: "唐吉訶德多盒促銷",
    jpDiscountPrice: 580,
    twCampaign: "屈臣氏兩件特惠",
    twDiscountPrice: 260,
    twSearchUrl: "https://www.google.com/search?q=%E4%BC%91%E8%B6%B3%E6%99%82%E9%96%93+18%E6%9E%9A",
    jpSearchUrl: "https://www.google.com/search?q=%E4%BC%91%E8%B6%B3%E6%99%82%E9%96%93+18%E6%9E%9A+%E4%BE%A1%E6%A0%BC"
  }
];

// 日本各大藥妝店即時優惠券與活動情報 (可隨時更新)
window.DRUGSTORE_COUPONS = [
  {
    store: "唐吉訶德 (驚安殿堂)",
    badge: "免稅 10% + 最高折 5%",
    desc: "含稅滿 10,000 日圓享免稅 10% + 額外折 5% 電子券",
    validDate: "長期有效",
    url: "https://japan-travel.donki.com/zh-tw/coupon/",
    bgColor: "from-yellow-400 to-amber-500",
    tag: "滿 1萬円折 5%"
  },
  {
    store: "松本清 (Matsukiyo)",
    badge: "免稅 10% + 額外最高折 7%",
    desc: "滿 1萬折 3%、滿 3萬折 5%、滿 5萬折 7% (需出示官方條碼)",
    validDate: "長期有效",
    url: "https://www.matsukiyo.co.jp/",
    bgColor: "from-blue-500 to-indigo-600",
    tag: "滿 5萬円折 7%"
  },
  {
    store: "大國藥妝 (Daikoku)",
    badge: "免稅 10% + 滿額加碼折 3~8%",
    desc: "常態免稅並提供店內中文店員優惠折扣，單價通常最具競爭力",
    validDate: "長期有效",
    url: "https://daikokudrug.com/",
    bgColor: "from-red-500 to-rose-600",
    tag: "免稅+常態滿額特惠"
  },
  {
    store: "Sundrug (尚都樂客)",
    badge: "免稅 10% + 額外折 3~7%",
    desc: "滿 1萬折 3%、滿 3萬折 5%、滿 5萬折 7%",
    validDate: "長期有效",
    url: "https://sundrug-online.com/",
    bgColor: "from-red-600 to-orange-500",
    tag: "滿 3萬円折 5%"
  },
  {
    store: "Bic Camera (必客)",
    badge: "免稅 10% + 藥妝折 5% / 電器折 7%",
    desc: "出示外國人專屬優惠券，化妝品藥妝額外折 5%，電器 7%",
    validDate: "長期有效",
    url: "https://www.biccamera.com/",
    bgColor: "from-emerald-500 to-teal-600",
    tag: "藥妝 5% / 電器 7%"
  }
];
