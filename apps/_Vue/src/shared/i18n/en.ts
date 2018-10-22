import { ILanguage } from './';

export const en: ILanguage = {
  key: 'en',
  description: 'English',
  translation: {
    AppName: 'Agora',
    AppNameUpperCase: 'AGORA',
    UserRegistrationTitle: 'User Registration',
    UserNameText: 'User name',
    UserSurnameText: 'User Surname',
    UserEmailText: 'User Email',
    UserRoleText: 'Type of User',
    UserABNText: 'ABN (optional)',
    UserPasswordText: 'Password',
    UserPasswordConfirmText: 'Confirm Password',
    UserLoginTitle: 'User Login',
    LoginButtonText: 'Login',
    RegisterButtonText: 'Register',
    ForgotPasswordButtonText: 'Forgot Password',
    LanguageMenuText: 'Translate',
    HomeMenuItemText: 'Home',
    AboutMenuItemText: 'About',
    LoginMenuItemText: 'Login',
    Greeting: (name: string) => `Hi ${name}`
  }
};
