import { ILanguage } from '@common/modules/i18n/interfaces/index';

export const en: ILanguage = {
    key: 'en',
    description: 'English',
    translation: {
        AppName: 'Agora',
        AppNameUpperCase: 'AGORA',
        menu: {
            user: {
                description: 'User',
                login: {
                    description: 'Login',
                }
            },
            home: {
                description: 'Home',
            },
            about: {
                description: 'About'
            },
            claims: {
                description: 'Claims',
                create: {
                    description: 'Submit a new claim'
                },
            },
            finance: {
                description: 'Finance',
                resubmissions: {
                    description: 'Resubmission'
                },
                payments: {
                    description: 'Make a payment'
                },
            }
        },
        User: {
            Login: {
                Title: 'User Login',
                Description: 'Description',
                LoginButtonText: 'Login',
            },
            Registration: {
                Title: 'User Registration',
                Description: 'Description',
                UserNameText: 'User name',
                UserSurnameText: 'User Surname',
                UserEmailText: 'User Email',
                UserRoleText: 'Type of User',
                UserABNText: 'ABN (optional)',
                UserPasswordText: 'Password',
                UserPasswordConfirmText: 'Confirm Password',
                RegisterButtonText: 'Register',
                ForgotPasswordButtonText: 'Forgot Password',
            }
        },
        Finance: {
            Payments: {
                Title: 'Change Payments',
                Description: 'Please change your paymemts.'
            },
            Resubmissions: {
                Title: 'Change resubmission date',
                Description: 'Please change your resubmission date.'
            },
        },
        About: {
            Title: 'Title',
            Description: 'Description',
        },
        Claims: {
            Create: {
                Title: 'Title',
                Description: 'Description',
            }
        },
        Home: {
            Title: 'Title',
            Description: 'Description',
        },
        Greeting: (name: string) => `Hi ${name}`
    }
};
