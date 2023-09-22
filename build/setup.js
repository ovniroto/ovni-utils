import { readFile, writeFile } from 'fs';

const file = './src/index.ts';
const newFile = './src/bundle.ts';

readFile(file, 'utf8', (err, data) => {
    if(err) { console.error(err); return; }

    const modifiedData = data.replace(/\.ts/g, "");

    writeFile(newFile, modifiedData, 'utf8', (err) => {
        if(err) { console.error(err); return; }
        console.log('Done!');
    });

});