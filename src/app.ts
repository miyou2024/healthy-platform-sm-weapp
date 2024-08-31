import { createApp } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'
import './app.less'

const App = createApp({
  async onShow () {
  },
})
App.use(IconFont)

export default App
