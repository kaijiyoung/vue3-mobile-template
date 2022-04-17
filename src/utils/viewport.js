// 更简洁的移动端 viewport 自适应方案
function setViewPort() {
  const meta = document.createElement("meta");
  const scale = window.screen.width / 375;
  const metaContent = `width=375, initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}, user-scalable=no`;
  meta.setAttribute("name", "viewport");
  meta.setAttribute("content", metaContent);
  const hasMeta = document.querySelector("meta[name=viewport]");
  if (!hasMeta) {
    document.head.appendChild(meta);
  } else {
    hasMeta.setAttribute("content", metaContent);
  }
}

export default (function() {
  setViewPort();
  window.onresize = () => setViewPort();
})();