declare class Logger {
    private static getTimestamp;
    private static getDateString;
    static internalError(message: string, type?: string, ...optionalParams: any[]): void;
    static userError(message: string, type?: string, ...optionalParams: any[]): void;
    static log(message: string, type?: string, ...optionalParams: any[]): void;
    static warn(message: string, type?: string, ...optionalParams: any[]): void;
}
export default Logger;
