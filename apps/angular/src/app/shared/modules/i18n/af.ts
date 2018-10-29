import { ILanguage } from './';

export const af: ILanguage = {
  key: 'af',
  description: 'Afrikaans',
  translation: {
    AppName: 'Agora',
    AppNameUpperCase: 'AGORA',
    UserRegistrationTitle: 'Gebruiker Registratie',
    UserNameText: 'User name',
    UserSurnameText: 'User Surname',
    UserEmailText: 'User Email',
    UserRoleText: 'Type of User',
    UserABNText: 'ABN (optional)',
    UserPasswordText: 'Password',
    UserPasswordConfirmText: 'Confirm Password',
    UserLoginTitle: 'Gebruiker Login',
    LoginButtonText: 'Login',
    RegisterButtonText: 'Registeer',
    ForgotPasswordButtonText: 'Passwoord Vergeet',
    LanguageMenuText: 'Vertaal',
    HomeMenuItemText: 'Tuis',
    AboutMenuItemText: 'Oor',
    LoginMenuItemText: 'Log',
    Greeting: (name: string) => `Hi ${name}`
  }
};
