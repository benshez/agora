import { ITranslation } from '@common/modules/i18n/interfaces/ITranslation';

export interface ILanguage {
    key: string;
    description: string;
    translation: ITranslation;
}
