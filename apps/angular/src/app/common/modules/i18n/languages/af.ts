import { ILanguage } from '@common/modules/i18n/interfaces/index';

export const af: ILanguage = {
    key: 'af',
    description: 'Afrikaans',
    translation: {
        AppName: 'Agora',
        AppNameUpperCase: 'AGORA',
        menu: {
            user: {
                description: '(A)User',
                login: {
                    description: '(A)Login'
                }
            },
            home: {
                description: '(A)Home'
            },
            about: {
                description: '(A)About'
            },
            claims: {
                description: '(A)Claims',
                create: {
                    description: '(A)Submit a new claim'
                },
            },
            finance: {
                description: '(A)Finance',
                resubmissions: {
                    description: '(A)Resubmission'
                },
                payments: {
                    description: '(A)Make a payment'
                },
            }
        },
        User: {
            Login: {
                Title: 'Gebruiker Login',
                Description: 'Gebruik Dit So.',
                LoginButtonText: 'Login',
            },
            Registration: {
                Title: 'Gebruiker Registratie',
                Description: 'Gebruik Dit So.',
                UserNameText: 'User name',
                UserSurnameText: 'User Surname',
                UserEmailText: 'User Email',
                UserRoleText: 'Type of User',
                UserABNText: 'ABN (optional)',
                UserPasswordText: 'Password',
                UserPasswordConfirmText: 'Confirm Password',
                RegisterButtonText: 'Registeer',
                ForgotPasswordButtonText: 'Passwoord Vergeet',
            }
        },
        Finance: {
            Payments: {
                Title: 'Verander Betaalings',
                Description: 'Verander Asseblief Betaalings.'
            },
            Resubmissions: {
                Title: 'Verander Betaalings',
                Description: 'Verander Asseblief Betaalings.'
            }
        },
        About: {
            Title: '(A)Title',
            Description: '(A)Description',
        },
        Claims: {
            Create: {
                Title: '(A)Title',
                Description: '(A)Description',
            }
        },
        Home: {
            Title: '(A)Title',
            Description: '(A)Description',
        },
        Greeting: (name: string) => `Hi ${name}`
    }
};
