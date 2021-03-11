/*
 * @Author: zhangjiawei
 * @Date: 2021-03-10 11:21:59
 */
module.exports = {
  presets: [
    [
      '@babel-preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@bebel-preset-typescript'
  ]
}