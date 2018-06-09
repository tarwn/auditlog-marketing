const debug = require('debug')('metalsmith-swagger-import');
const request = require("request");
const fs = require("fs");

module.exports = (options) => {
    const requiredArgs = ["url", "cachePath", "propertyName"];
    const missingArgs = requiredArgs.filter((field) => options[field] === undefined);
    if(missingArgs.length > 0){
        throw Error(`Missing required options for metalsmith-swagger-import: ${ missingArgs.join(', ') }`);
    }    

    return function(files, metalsmith, done) {
        request(options.url, (error, response, body) => {
            if(!error){
                if(typeof body === "string" || body instanceof String){
                    fs.writeFileSync(options.cachePath, body, 'utf8');
                }
                else{
                    const readableJSON = JSON.stringify(body, null, 4);
                    fs.writeFileSync(options.cachePath, readableJSON, 'utf8');
                }
            }
            else{
                console.log(`Error fetching fresh swagger, using cached file: ${error}`);
            }

            const cachedJSON = fs.readFileSync(options.cachePath);
            apiDefinition = JSON.parse(cachedJSON);

            metalsmith._metadata[options.propertyName] = apiDefinition;
            done();    
        });
    };
};