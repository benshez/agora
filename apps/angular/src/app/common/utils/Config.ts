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

    public static ROUTES(): Array<IAppRoute> {
        return [
            {
                url: '/home',
                name: 'home',
                description: 'menu.home'
            },
            {
                url: '/about',
                name: 'about',
                description: 'menu.about'
            },
            {
                url: '/claims-create',
                name: 'claims-create',
                description: 'menu.claims'
            },
            {
                url: '/finance-resubs',
                name: 'finance-resubs',
                description: 'menu.resubs'
            },
            {
                url: '/finance-payments',
                name: 'finance-payments',
                description: 'menu.changePayments'
            },
            {
                url: '/login',
                name: 'login',
                description: 'menu.login'
            }
        ];
    }

    public static DEFAULT_LANGUAGE(): string {
        return 'en';
    }
}
