async function n() {
  document.addEventListener("keydown", (e) => {
    e.ctrlKey && e.metaKey && e.code === "KeyT" && window.open(
      `https://papago.naver.net/website?locale=en&source=en&target=ko&url=${window.location.href}`
    );
  }), document.addEventListener("keydown", (e) => {
    e.ctrlKey && e.metaKey && e.code === "KeyS" && window.open(
      `https://www.similarweb.com/website/${window.location.host}/#overview`
    );
  });
}
n();
