import { readFile, writeFile } from 'fs';

const base = './src/index.ts';
const bundle = './src/bundle.ts';

readFile(base, 'utf8', (err, data) => {
    if(err) { console.error(err); return; }

    const modifiedData = data.replace(/\.ts/g, "");

    writeFile(bundle, modifiedData, 'utf8', (err) => {
        if(err) { console.error(err); return; }
        console.log('Bundle file created!');
    });

});