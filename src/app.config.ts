export default defineAppConfig({
  pages: [
    'pages/cart/index',
    'pages/address-edit/index',
    'pages/address-list/index',
    'pages/account/index',
    'pages/index/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车'
      },
      {
        pagePath: 'pages/account/index',
        text: '我的'
      }
    ]
  },
  requiredPrivateInfos: [
    'chooseAddress'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
