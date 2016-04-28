#!/usr/bin/env node

var main = function() {
    /* run eslint */
    var CLIEngine = require("eslint").CLIEngine;
    var cli = new CLIEngine();
    var report = cli.executeOnFiles(["src"]);
    var formatter = cli.getFormatter();
    var exitCode = 0;

    console.log("======================================================================");
    console.log("Running eslint");
    console.log("======================================================================");

    console.log(formatter(report.results) || "OK");

    if (CLIEngine.getErrorResults(report.results).length > 0) {
        exitCode = 1;
    }
    /* */

    process.exit(exitCode);
};

main();
