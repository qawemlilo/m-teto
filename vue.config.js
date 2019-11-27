module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/m-teto/' : '/',

  pwa: {
    name: 'M-TETO',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    iconPaths: {
      favicon32: 'img/icons/23.png',
      favicon16: 'img/icons/16.png',
      appleTouchIcon: 'img/icons/152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/144.png'
    }
  }
}