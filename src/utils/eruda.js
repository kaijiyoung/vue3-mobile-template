// 移动端调试，开发、测试环境启用
if (import.meta.env.VITE_APP_DEBUG === 'true') {
  ;(function () {
    var script = document.createElement('script')
    script.src = 'https://unpkg.com/eruda'
    document.body.appendChild(script)
    script.onload = function () {
      eruda.init()
    }
  })()
}
