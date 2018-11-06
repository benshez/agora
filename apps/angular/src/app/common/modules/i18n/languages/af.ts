import { ILanguage } from "@common/modules/i18n/interfaces/index";

export const af: ILanguage = {
    key: "af",
    description: "Afrikaans",
    translation: {
        AppName: "Agora",
        AppNameUpperCase: "AGORA",
        Menu: {
            LanguageMenuText: "Vertaal",
            HomeMenuItemText: "Tuis",
            AboutMenuItemText: "Oor",
            LoginMenuItemText: "Log",
            ClaimsMenuItemText: "Claims",
            ResubmissionsMenuItemText: "Resubmissions",
            FinancePaymentsMenuItemText: "Payments",
        },
        User: {
            Login: {
                Title: "Gebruiker Login",
                Description: "Gebruik Dit So.",
                LoginButtonText: "Login",
            },
            Registration: {
                Title: "Gebruiker Registratie",
                Description: "Gebruik Dit So.",
                UserNameText: "User name",
                UserSurnameText: "User Surname",
                UserEmailText: "User Email",
                UserRoleText: "Type of User",
                UserABNText: "ABN (optional)",
                UserPasswordText: "Password",
                UserPasswordConfirmText: "Confirm Password",
                RegisterButtonText: "Registeer",
                ForgotPasswordButtonText: "Passwoord Vergeet",
            }
        },
        Finance: {
            Payments: {
                Title: "Verander Betaalings",
                Description: "Verander Asseblief Betaalings."
            },
            Resubmissions: {
                Title: "Verander Betaalings",
                Description: "Verander Asseblief Betaalings."
            }
        },
        About: {
            Title: "Title",
            Description: "Description",
        },
        Claims: {
            Create: {
                Title: "Title",
                Description: "Description",
            }
        },
        Home: {
            Title: "Title",
            Description: "Description",
        },
        Greeting: (name: string) => `Hi ${name}`
    }
};
