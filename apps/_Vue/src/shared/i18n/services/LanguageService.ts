import _ from 'lodash';
import { ITranslation, ILanguage, en, af } from '../';

export class LanguageService {
  public GET_LANGUAGES(): Array<ILanguage> {
    let langs: Array<ILanguage> = [en, af];

    return langs;
  }

  public GET_DEFAULT_LANGUAGE(): string {
    return 'en';
  }

  public FILTER_LANGUAGE(lang): ITranslation {
    let DEFAULT_LANG = this.GET_DEFAULT_LANGUAGE();

    let trans: ILanguage = _.find(this.GET_LANGUAGES(), o => {
      let x: ILanguage = o.key === lang ? o : o[DEFAULT_LANG];
      return x;
    });

    return trans.translation;
  }
}
