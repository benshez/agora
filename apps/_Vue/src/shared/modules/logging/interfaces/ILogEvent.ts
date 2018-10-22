import {LogLevel } from '../';

export interface ILogEvent {
    message: string | Object;
    level: LogLevel;
}