const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
delete packageJson.files;
packageJson.main = 'index.js';
packageJson.types = 'index.d.ts';

fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, '\t'), 'utf8');
