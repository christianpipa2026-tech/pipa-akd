// Service Worker — Pipa Akd App
const CACHE_NAME = "portugues-brasil-v1";

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim());
});

// Manejar notificaciones push
self.addEventListener("push", (e) => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || "🇧🇷 Pipa Akd";
  const options = {
    body: data.body || "Hora de praticar! Não perca sua sequência.",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    tag: "daily-reminder",
    renotify: true,
    data: { url: "/" }
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// Abrir la app al hacer clic en la notificación
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === "/" && "focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow("/");
    })
  );
});
