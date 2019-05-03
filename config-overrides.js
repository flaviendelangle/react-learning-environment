const { merge } = require('lodash')

const configPatch = require('./webpack.config')

module.exports = config => merge({}, config, configPatch)
