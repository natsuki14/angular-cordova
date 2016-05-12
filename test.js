#!/usr/bin/env node

var main = function() {
    /* run eslint */
    var Console = require('console').Console;
    var logger = new Console(process.stdout, process.stderr);

    var CLIEngine = require("eslint").CLIEngine;
    var cli = new CLIEngine();
    var report = cli.executeOnFiles(["src", "test.js"]);
    var formatter = cli.getFormatter();
    var exitCode = 0;

    logger.log("======================================================================");
    logger.log("Running eslint");
    logger.log("======================================================================");

    logger.log(formatter(report.results) || "OK");

    if (CLIEngine.getErrorResults(report.results).length > 0) {
        exitCode = 1;
    }
    /* */

    process.exit(exitCode);
};

main();
