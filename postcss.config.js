const path = require("path");

module.exports = ({ webpack }) => {
  // 如果设计稿和宽度不匹配, 可按倍数调整
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
