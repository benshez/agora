import { I18n } from 'i18n-ts';
export interface ITranslation {
  AppName: string;
  AppNameUpperCase: string;
  UserRegistrationTitle: string;
  UserLoginTitle: string;
  UserNameText: string;
  UserSurnameText: string;
  UserEmailText: string;
  UserRoleText: string;
  UserABNText: string;
  UserPasswordText: string;
  UserPasswordConfirmText: string;
  LoginButtonText: string;
  RegisterButtonText: string;
  ForgotPasswordButtonText: string;
  LanguageMenuText: string;
  HomeMenuItemText: string;
  AboutMenuItemText: string;
  LoginMenuItemText: string;
  Greeting: (name: string) => string;
}
