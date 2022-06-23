# xsd-to-csv
Convert XSD file, type definitions into CSV.

Currenlty only supports simple type, the output file structure is as below:

| simpleType | restriction | enumeration
| ------ | ------ | ------
| countryType | string | England


## System Arguments

| argument | value | description | default value
| ------ | ------ | ------ | --- |
| -xd, --xsd_dir (required) | <directory_path> | xsd files including directory | 
| -o, --output | < text > | name of output file | output
| -se, --source_encoding | <encoding_type> | encoding format of xsd files | iso-8859-9


## Usage

First clone the repo and run `npm install` in clonned directory

```sh
node main.js -o custom_output_name --xsd_dir ./xsd_files -se utf-8
```
`./custom_output_name.csv` file must be created


  
### Todo
* Add support for complex type
* Add direct conversion to excel file
