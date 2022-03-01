module.exports = {
  plugins: {
    "postcss-pxtorem": {
      // 37.5表示设计稿宽度为 375px时, rem为10rem
      rootValue: 37.5,
      propList: ["*", "!border"],
      exclude: /node_modules/i 
    },
  },
};