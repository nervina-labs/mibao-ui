const url = require('@rollup/plugin-url')
const svgr = require('@svgr/rollup').default

module.exports = options => {
  return {
    ...options,
    plugins: [
      ...options.plugins,
      url(),
      // bundle svg as react component like CRA
      svgr()
    ]
  }
}
