export default function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const swUrl = `/service-worker.js`;
      registerValidSW(swUrl);
    });
  }
}

const registerValidSW = swUrl => {
  navigator.serviceWorker.register(swUrl).catch(error => {
    console.error("Error during service worker registration:", error);
  });
};

export const unregister = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
};
