const fs = require('fs')
const argparser = require('./argparser')
const Converter = require('./Converter')

let parsedArgs = argparser.parse_args()
let converter = new Converter(parsedArgs.xsd_dir, parsedArgs.output, parsedArgs.source_encoding)
converter.convert();






