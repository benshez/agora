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
    FinancePayments: {
        Title: string;
        Description: string;
    }
    FinanceResubmissions: {
        Title: string;
        Description: string;
    }
    Greeting: (name: string) => string;
}
