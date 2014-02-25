/*global define, brackets */

/**
 * Beautifies your PHP code
 */
define(function (require, exports, module) {
    "use strict";

    // Load dependent modules
    var AppInit = brackets.getModule("utils/AppInit");
    var ext_utils = brackets.getModule('utils/ExtensionUtils');
    var NodeConnection = brackets.getModule('utils/NodeConnection');
    var node = new NodeConnection();

    function init() {


    }

    if (!node.domains.phpbeautifier) {
        node.connect(true).done(function () {
            var path = ext_utils.getModulePath(module, 'node/commander.js');
            node.loadDomains([path], true).done(function () {
                AppInit.appReady(init);
            });
        });
    } else {
        AppInit.appReady(init);
    }
});
