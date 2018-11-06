export interface ITranslation {
    AppName: string;
    AppNameUpperCase: string;
    Menu: {
        LanguageMenuText: string;
        LoginMenuItemText: string;
        HomeMenuItemText: string;
        AboutMenuItemText: string;
        ClaimsMenuItemText: string;
        ResubmissionsMenuItemText: string;
        FinancePaymentsMenuItemText: string;
    },
    User: {
        Login: {
            Title: string;
            Description: string;
            LoginButtonText: string;
        },
        Registration: {
            Title: string;
            Description: string;
            UserNameText: string;
            UserSurnameText: string;
            UserEmailText: string;
            UserRoleText: string;
            UserABNText: string;
            UserPasswordText: string;
            UserPasswordConfirmText: string;
            RegisterButtonText: string;
            ForgotPasswordButtonText: string;
        }
    },
    Finance: {
        Payments: {
            Title: string;
            Description: string;
        },
        Resubmissions: {
            Title: string;
            Description: string;
        }
    },
    About: {
        Title: string;
        Description: string;
    },
    Claims: {
        Create: {
            Title: string;
            Description: string;
        }
    },
    Home: {
        Title: string;
        Description: string;
    }
    Greeting: (name: string) => string;
}
