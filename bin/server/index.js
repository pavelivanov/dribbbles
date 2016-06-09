const path = require('path')
const modPath = require('app-module-path')

modPath.addPath(path.join(__dirname, '../../server'))
modPath.addPath(path.join(__dirname, '../../shared'))

require('babel-register')
require('./server')