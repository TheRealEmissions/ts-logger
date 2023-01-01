import Chalk from "chalk";
class Logger {
    static getTimestamp() {
        return new Date().toLocaleString();
    }
    static getDateString(type) {
        return Chalk.cyan.bold(`[${this.getTimestamp()}]${type ? ` ${type}` : ""} => `);
    }
    static internalError(message, type, ...optionalParams) {
        console.log(" ");
        console.log(Chalk.red.bold(`[INTERNAL ERROR] ${this.getDateString(type)} => `));
        if (message)
            console.error(Chalk.red(message, ...optionalParams));
        console.log(Chalk.redBright.bold("REPORT TO DEVELOPER!"));
        console.log(Chalk.red.bold(`[/INTERNAL ERROR]`));
        console.log(" ");
    }
    static userError(message, type, ...optionalParams) {
        console.log(" ");
        console.log(Chalk.red.bold(`[USER ERROR] ${this.getDateString(type)} => `));
        if (message)
            console.error(Chalk.red(message, ...optionalParams));
        console.log(Chalk.red.bold(`[/USER ERROR]`));
        console.log(" ");
    }
    static log(message, type, ...optionalParams) {
        console.log(this.getDateString(type), Chalk.yellow(message, ...optionalParams));
    }
}
export default Logger;
