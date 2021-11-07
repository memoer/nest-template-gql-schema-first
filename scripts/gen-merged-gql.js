const { join } = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { print } = require('graphql');
const fs = require('fs');

const distPath = join(process.cwd(), 'dist');

const typesArray = loadFilesSync([
  join(process.cwd(), 'libs/config/src/graphql/core.gql'),
  join(process.cwd(), 'src/**/*.gql'),
]);
const typeDefs = mergeTypeDefs(typesArray);

if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);
fs.writeFileSync(join(distPath, 'schema.gql'), print(typeDefs));
