export default {
  pages: ['pages/index/index', 'pages/owner/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '库存管理器',
    navigationBarTextStyle: 'black'
  },
  cloud: true,
  tabBar: {
    backgroundColor: '#fff',
    color: '#bfbfbf',
    selectedColor: '#333333',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/img/all.png',
        selectedIconPath: 'assets/img/all-fill.png',
        text: ''
      },
      {
        pagePath: 'pages/owner/index',
        iconPath: 'assets/img/bussiness-man.png',
        selectedIconPath: 'assets/img/bussiness-man-fill.png',
        text: ''
      }
    ]
  }
};
