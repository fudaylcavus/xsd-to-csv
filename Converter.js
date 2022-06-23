const Xsd2JsonSchema = require('xsd2jsonschema').Xsd2JsonSchema;
const { Iconv } = require('iconv') // Encoding library 
const fs = require('fs')

class Converter {
    constructor(xsdDir, outputName='output', sourceEncoding='iso-8859-9') {
        this.outputStream = fs.createWriteStream(`${outputName}.csv`, {
            flags: 'w+',
            encoding: 'utf-8'
        })
        this.iconv = new Iconv(sourceEncoding, 'utf-8');
        this.xsdDir = xsdDir;
        this.files = fs.readdirSync(xsdDir)
        this.savedDef = new Array();

    }

    convert() {
        for (let file in this.files) {
            this.appendTypes(`${this.xsdDir}/${this.files[file]}`)
        }
        this.outputStream.end();
    }

    appendTypes(filepath) {
        const xs2js = new Xsd2JsonSchema();
        const xsdContent = this.iconv.convert(fs.readFileSync(filepath)).toString('utf-8')

        const convertedSchemas = xs2js.processAllSchemas({
            schemas: { 'file.xsd': xsdContent }
        });

        const jsonSchema = convertedSchemas['file.xsd'].getJsonSchema();
        console.log(jsonSchema.definitions)
        for (let def in jsonSchema.definitions) {
            let currentDef = jsonSchema.definitions[def]
            if (this.savedDef.includes(def)) continue;
            if (currentDef.type != 'object' && def != 'undefined') {
                this.savedDef.push(def)
                for (let e in currentDef.enum) {
                    this.outputStream.write(`${def},${currentDef.type},${currentDef.enum[e]}\n`)
                }
            }
        }
    }
}

module.exports = Converter