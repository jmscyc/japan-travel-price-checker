const CACHE_NAME = "travel-price-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./js/mockData.js",
  "./js/currency.js",
  "./js/crossBorder.js",
  "./js/domesticDrug.js",
  "./js/basketOptimizer.js",
  "./js/scanner.js",
  "./js/app.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) {
            return caches.delete(k);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // 對於 CDN 或外部請求優先走網路，失敗時查快取；本地靜態檔案優先查快取
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).catch(() => {
        // 離線回退
        return caches.match("./index.html");
      });
    })
  );
});
