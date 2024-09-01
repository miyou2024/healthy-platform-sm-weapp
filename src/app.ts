import { createApp } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'
import './app.less'

const App = createApp({
  async onShow () {
    console.log(
      `App.onShow`,
      process.env.NODE_ENV,
      process.env.APP_ID,
      process.env.APP_ENV
      );
  },
})
App.use(IconFont)

export default App
