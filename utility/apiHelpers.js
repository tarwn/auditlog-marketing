module.exports = function (handlebars) {

    handlebars.registerHelper("apiType", function (topTypeName, context, options) {
        function injectChildObject(context, obj, typeName, prefix) {
            var data = context.api.definitions[typeName].properties;
            for (var key in context.api.definitions[typeName].properties) {
                if (!data[key].$ref) {
                    obj[prefix + key] = data[key];
                }
                else {
                    obj[prefix + key] = data[key];
                    obj[prefix + key].type = 'object';
                    injectChildObject(context, obj, data[key].$ref.replace('#/definitions/', ''), prefix + key + ".");
                }
                obj[prefix + key].isRequired = context.api.definitions[typeName].required &&
                    context.api.definitions[typeName].required.indexOf(key) >= 0;
            }
        }
        var newContext = context.api.definitions[topTypeName];
        newContext.displayableProperties = {};
        injectChildObject(context, newContext.displayableProperties, topTypeName, "");

        if (options.fn)
            return options.fn(newContext);
        else
            return newContext;
    });

    handlebars.registerHelper("apiPath", function (pathName, context, options) {
        var newContext = context.api.paths[pathName];

        if (options.fn)
            return options.fn(newContext);
        else
            return newContext;
    });

    handlebars.registerHelper("apiPathResponseType", function (context, options) {
        if (context.schema != null && context.schema.$ref != null) {
            return context.schema.$ref.replace('#/definitions/', '');
        }
        else { 
            return "";
        }
    });

};