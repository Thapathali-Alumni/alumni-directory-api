const sjs = require('sequelize-json-schema');
const db = require('./database/sequelize');
const YAML = require('yamljs');
const {
    replace
} = require('lodash');

jsonSchema = sjs.getSequelizeSchema(db.sequelize);
// const obj = JSON.parse(jsonSchema);

const obj = jsonSchema;

obj.components = {
    schemas: 'NULL'
};

obj.components.schemas = obj.definitions;

delete obj.type;
delete obj['$schema'];
delete obj.definitions;

json = JSON.stringify([obj]);


YAMLSchema = YAML.stringify(jsonSchema, 8);
const replaceRegularExp = /\#\/definitions\//g

YAMLSchema = YAMLSchema.replace(replaceRegularExp, `#/components/schemas/`);
console.log(YAMLSchema);

fs = require('fs');

fs.writeFile('./src/auto-sequelize-models.yaml', YAMLSchema, function (err) {
    if (err) return console.log(err);
    console.log('file_saved');
});