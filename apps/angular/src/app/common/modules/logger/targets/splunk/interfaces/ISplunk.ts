export interface ISplunk {
    log(m: any): void;
    debug(m: any): void;
    error(m: any): void;
    warn(m: any): void;
    info(m: any): void;
}
