(function (moduleFactory) {
    let isNode = typeof module !== undefined && typeof module.exports !== undefined

    if (isNode) {
        const signet = require('./signet-types');

        module.exports = moduleFactory(signet);
    } else if (typeof signet === 'object') {
        window.<%= projectVarName %> = moduleFactory(signet);
    } else {
        throw new Error('The module <%= projectName %> requires Signet to run.');
    }

})(function (signet) {
    'use strict';


});
