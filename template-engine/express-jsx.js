const fs = require('fs');


function getKeysFromOptions(options) {
    const {settings, _locals, ...objectKeys} = options;

    return Object.keys(objectKeys);
}

function getRenderedContent(content,options) {
    const keys = getKeysFromOptions(options);
    let contentString = content.toString();

    for (const key of keys) {
        contentString = contentString.replace(new RegExp(`\{${key}}`, "gi"), options[key]);
    }

    return contentString;
}

function expressJSX(filePath,options,callback) {
    fs.readFile(filePath,function(err, content) {
        if(err) {
            return callback(err);
        }
        
        const rendered = getRenderedContent(content,options);

        return callback(null,rendered);
    });
}

module.exports = expressJSX;