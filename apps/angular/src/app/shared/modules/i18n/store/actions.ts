import { Action } from '@ngrx/store';

import {
    GET_LANGUAGES,
    GET_LANGUAGE,
    GET_DEFAULT_LANGUAGE,
    UPDATE_LANGUAGE
} from '@common/base';

export class GetLanguage implements Action {
    readonly type = GET_LANGUAGE;
}

export class GetDefaultLanguages implements Action {
    readonly type = GET_DEFAULT_LANGUAGE;

    constructor(public payload: any) { }
}

export class GetLanguages implements Action {
    readonly type = GET_LANGUAGES;

    constructor(public payload: any) { }
}

export class UpdateLanguage implements Action {
    readonly type = UPDATE_LANGUAGE;

    constructor(public payload: any) { }
}


export type LanguageUnion = GetLanguage | GetDefaultLanguages | GetLanguages | UpdateLanguage;
