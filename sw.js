// Service worker minimo: deixa o app instalavel no celular. Nao guarda nada em cache (os dados sempre vem da nuvem).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
