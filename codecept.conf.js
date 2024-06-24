/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://swapi.dev/api'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'CodeceptJSLearning'
}