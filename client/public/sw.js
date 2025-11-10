// Service Worker para Cache Agressivo - Kit Mudança de Vida
const CACHE_NAME = 'kit-mudanca-v1';
const urlsToCache = [
  '/',
  '/hero-kit-400.webp',
  '/hero-kit-800.webp',
  '/hero-kit-1200.webp',
  '/logo-92projects.webp',
  '/ganhador1.webp',
  '/ganhador2.webp',
  '/dinheiro-100reais.webp'
];

// Install - Cache recursos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate - Limpar caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - Cache First Strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - retornar do cache
        if (response) {
          return response;
        }

        // Clonar request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Verificar se resposta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar response para cache
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});
