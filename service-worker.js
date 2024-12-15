(() => {
  self.addEventListener("install", (event) => {
    console.log("Service worker installing", event);
  });

  // The activate handler takes care of cleaning up old caches.
  self.addEventListener("activate", (event) => {
    console.log("Service worker actiavted", event);
  });
})();
