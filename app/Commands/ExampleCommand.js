const { ConsoleCommand } = require("webtypen-jsframework-core");

class ExampleCommand extends ConsoleCommand {
    static signature = "example:command";

    async handle() {
        this.writeln("Example-command-output ...");
    }
}

module.exports = ExampleCommand;
