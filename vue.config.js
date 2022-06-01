module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          hack: `true; @import '~@/styles/var.less';`,
        },
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import '~@/styles/theme.less';`,
          },
        },
      },
    },
  },
};
