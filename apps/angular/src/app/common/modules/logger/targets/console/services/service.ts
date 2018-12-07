import { Injectable } from '@angular/core';
import { IConsole } from '@common/modules/logger/targets/console/interfaces/IConsole';

@Injectable()
export class ConsoleService implements IConsole {
    public log(_m: any): void { return; }
    public debug(_m: any): void { return; }
    public error(_m: any): void { return; }
    public warn(_m: any): void { return; }
    public info(_m: any): void { debugger; return; }
}
