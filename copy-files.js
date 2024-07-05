const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const filesToCopy = [
    { src: 'src', dest: 'dist/src' },
    { src: 'bin', dest: 'dist/bin' },
    { src: '*.yml', dest: 'dist' },
    { src: '*.yaml', dest: 'dist' },
    { src: '*.json', dest: 'dist' },
    { src: 'README.md', dest: 'dist' },
    { src: 'LICENSE', dest: 'dist' }
];

filesToCopy.forEach(file => {
    const sourcePath = path.join(__dirname, file.src);
    const destPath = path.join(__dirname, file.dest);

    // Handle glob patterns for files like *.yml, *.yaml, *.json
    if (file.src.includes('*')) {
        glob(sourcePath, (err, matches) => {
            if (err) {
                console.error(`Error finding ${file.src}: ${err}`);
            } else if (matches.length === 0) {
                console.warn(`File or directory ${file.src} does not exist, skipping.`);
            } else {
                matches.forEach(match => {
                    const matchDest = path.join(__dirname, file.dest, path.basename(match));
                    fs.copy(match, matchDest, err => {
                        if (err) {
                            console.error(`Error copying ${match}: ${err}`);
                        } else {
                            console.log(`Copied ${match} to ${matchDest}`);
                        }
                    });
                });
            }
        });
    } else {
        fs.pathExists(sourcePath, (err, exists) => {
            if (exists) {
                fs.stat(sourcePath, (err, stats) => {
                    if (err) {
                        console.error(`Error stating ${file.src}: ${err}`);
                    } else if (stats.isDirectory()) {
                        fs.copy(sourcePath, destPath, err => {
                            if (err) {
                                console.error(`Error copying directory ${file.src}: ${err}`);
                            } else {
                                console.log(`Copied directory ${file.src} to ${file.dest}`);
                            }
                        });
                    } else {
                        const destFilePath = path.join(__dirname, 'dist', path.basename(file.src));
                        fs.copy(sourcePath, destFilePath, err => {
                            if (err) {
                                console.error(`Error copying file ${file.src}: ${err}`);
                            } else {
                                console.log(`Copied file ${file.src} to ${destFilePath}`);
                            }
                        });
                    }
                });
            } else {
                console.warn(`File or directory ${file.src} does not exist, skipping.`);
            }
        });
    }
});
