import { InjectionToken } from '@angular/core';

import { IPlatforms } from '@common/utils/interfaces/IPlatforms';
import { IAppRoute } from '@common/utils/interfaces/IAppRoute';

export let APP_CONFIG = new InjectionToken('Config');

export class Config {
    public static PLATFORMS: IPlatforms = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native'
    };

    public static PLATFORM_TARGET: string = Config.PLATFORMS.WEB;

    public static get IS_WEB(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }

    public static get IS_MOBILE_NATIVE(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }

    public static ROUTES(): Array<any> {
        return [
            {
                url: '/home',
                name: 'home',
                description: 'menu.home.description',
                children: []
            },
            {
                url: '/about',
                name: 'about',
                description: 'menu.about.description',
                children: []
            },
            {
                url: '',
                name: 'claims',
                description: 'menu.claims.description',
                children:
                    [
                        {
                            url: '/claims-create',
                            name: 'claims.create',
                            description: 'menu.claims.create.description'
                        }
                    ]
            },
            {
                url: '',
                name: 'finance',
                description: 'menu.finance.description',
                children:
                    [
                        {
                            url: '/finance-resubmissions',
                            name: 'finance.resubmissions',
                            description: 'menu.finance.resubmissions.description'
                        },
                        {
                            url: '/finance-payments',
                            name: 'finance.payments',
                            description: 'menu.finance.payments.description'
                        }
                    ]
            },
            {
                url: '',
                name: 'user',
                description: 'menu.user.description',
                children:
                    [
                        {
                            url: '/user-login',
                            name: 'user.login',
                            description: 'menu.user.login.description'
                        }
                    ]
            }
        ];
    }
}
