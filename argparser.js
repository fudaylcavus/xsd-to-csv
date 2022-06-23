const { ArgumentParser } = require('argparse')
const { isDirectory, isEncodingType } = require('./utils')

const argparser = new ArgumentParser({
    description: 'Convert multiple XSD files to CSV'
})

argparser.add_argument('-xd', '--xsd_dir', {
    required: true,
    help: 'Specify the directory of xsd files, to convert',
    type: isDirectory
})

argparser.add_argument('-o', '--output', {
    help: 'Specify the output file\'s name'
})

argparser.add_argument('-se', '--source_encoding', {
    help: 'Specify the source xsd files encoding format',
    type: isEncodingType
})

module.exports = argparser
