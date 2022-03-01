const path = require("path");

module.exports = ({ webpack }) => {
  // 根据webpack读取的资源设置 标准值
  const viewWidth = webpack.resourcePath.includes(
    path.join("node_modules", "vant")
  ) ? 375 : 375;
  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: 375,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false,
      },
    },
  };
};
