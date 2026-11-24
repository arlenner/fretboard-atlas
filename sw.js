/* Fretboard Atlas offline support: newest version from the network, the saved copy when there is no (or a very slow) connection */
const CACHE = 'fretboard-atlas-1', PAGE = './';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll([PAGE, 'manifest.webmanifest', 'icon.svg'].map(u => new Request(u, {cache:'reload'})))));
});
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('fretboard-atlas-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
const keep = (key, res) => { if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)).catch(() => {}); } return res; };
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET') return;
  if (u.origin === location.origin) {
    const page = r.mode === 'navigate', key = page ? PAGE : r;
    const net = fetch(page ? u.pathname : r, {cache:'no-cache'}).then(res => keep(key, res));
    const saved = () => caches.match(key);
    const slow = new Promise(ok => setTimeout(ok, 4000)).then(saved).then(res => res || net);
    e.respondWith(Promise.race([net, slow]).catch(() => saved().then(res => res || Response.error())));
    e.waitUntil(net.catch(() => {}));
  } else if (/^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) {
    e.respondWith(caches.match(r).then(res => res || fetch(r).then(x => keep(r, x))));
  }
});