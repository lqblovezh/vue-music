// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
      'arrow-parens': 0,// 要求箭头函数的参数使用圆括号
      'generator-star-spacing': 0, //强制 generator 函数中 * 号周围使用一致的空格
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,// 禁用 debugger
      "array-callback-return": "error",// 强制数组方法的回调函数中有 return 语句
      "indent": 0,
      'no-tabs': 0,
      "block-spacing": "error",// 禁止或强制在单行代码块中使用空格(禁用)
      "brace-style": ["error", "1tbs"],// 双峰驼命名格式
      "comma-spacing": "error",
      "comma-style": ["error", "last"],
      "curly": ["error", "all"],
      "default-case": "error",
      "eqeqeq": "error",
      "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],// 强制在对象字面量的属性中键和值之间使用一致的间距
      "keyword-spacing": "error",// 强制在关键字前后使用一致的空格 (前后腰需要)
      "semi": ["error", "always", {"omitLastInOneLineBlock": true}],
      "semi-spacing": "error",
      "quotes": [2, "single", "avoid-escape"],
      "eol-last": 0,
      'space-before-function-paren': 0,
      'no-new':0,
      'no-unused-vars':0,
      'no-undef':0
  }
}
