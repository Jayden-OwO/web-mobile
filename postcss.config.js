module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', //需要转换的单位，默认为"px"；
      viewportWidth: 375, //设计稿的视口宽度
      unitPrecision: 3, //单位转换后保留的小数位数
      propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
      viewportUnit: 'vw', //转换后的视口单位
      fontViewportUnit: 'vw', //转换后字体使用的视口单位
      // selectorBlackList: ['antd-mobile', './src/assets/css/iconfont.less', 'noTransfer'], //不进行转换的css选择器，继续使用原有单位
      minPixelValue: 2, //设置最小的转换数值
      mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
      replace: false, //是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false // 是否处理横屏情况
    },
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    }
  }
}
