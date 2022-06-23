const fs = require('fs')

function isEncodingType(val) {
    const types = ['ascii', 'utf8', 'utf-8', 'utf16le', 'ucs2', 'ucs-2', 'base64', 'base64url', 'latin1', 'binary', 'hex']
    if (types.includes(val))
        return val;
    else {
        console.error("ENCODING_TYPE_ERROR: Given encoding type isn't valid format!")
        process.exit(-1)
    }
}

function isDirectory(path) {
    try {
        if (fs.lstatSync(path).isDirectory())
            return path;
        else {
            console.error("xsd_dir as directory not found!")
            process.exit(-1)
        }
    }
    catch (err) {
        console.log(`DIR_NOT_EXIST: no such directory '${path}'`);
        process.exit(-1)
    }
}

module.exports = {
    isDirectory,
    isEncodingType
}