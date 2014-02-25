(function () {

    ////////////////////////////////////////////////////////////////////////////////

    var child_process;

    child_process = require('child_process');

    ////////////////////////////////////////////////////////////////////////////////

    exports.init = function (manager) {
        if (!manager.hasDomain('phpbeautifier'))
            manager.registerDomain('phpbeautifier', {
                major: 1,
                minor: 0
            });

        manager.registerCommand('phpbeautifier', 'commander', commander, true);
    };

    ////////////////////////////////////////////////////////////////////////////////

    function commander(exec, cb) {
        child_process.exec(exec, function (err, stdout, stderr) {
            cb(null, stderr + stdout);
        });
    }

    ////////////////////////////////////////////////////////////////////////////////

}());
