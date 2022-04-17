import 'normalize.css'
import 'vant/lib/index.css'
// 有赞vant ui
// https://vant-contrib.gitee.io/vant/#/zh-CN/
import { Button, Calendar, Cell, CellGroup, Toast } from 'vant'

// 按需引入
export const setupVant = (app) => {
  app.use(Button)
  app.use(Calendar)
  app.use(Cell)
  app.use(CellGroup)
  app.use(Toast)
}
