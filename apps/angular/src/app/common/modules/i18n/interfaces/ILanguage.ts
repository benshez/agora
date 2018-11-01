import { ITranslation } from '@shared/modules/i18n';

export interface ILanguage {
    key: string;
    description: string;
    translation: ITranslation;
}
