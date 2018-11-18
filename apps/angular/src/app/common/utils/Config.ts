import { InjectionToken } from '@angular/core';
import _ from 'lodash';

import { IPlatforms } from '@common/utils/interfaces/IPlatforms';

export let APP_CONFIG = new InjectionToken('Config');

export class Config {
    public static PLATFORMS: IPlatforms = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native'
    };

    public static PLATFORM_TARGET: string = Config.PLATFORMS.WEB;

    public static IS_WEB(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }

    public static IS_MOBILE_NATIVE(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }

    public static DEBUG = {
        LEVEL_1: false,
        LEVEL_2: false,
        LEVEL_3: false,
        LEVEL_4: false // .log + all the above
    }

    public static IS_DEBUG_MODE(): boolean {
        return _.some(this.DEBUG, function (level: boolean) {
            return level === true;
        });
    }

    public static DATE_FMT_DD_MM_YYYY(): string {
        return 'dd/MM/yyyy';
    }

    public static TIME_FMT_HH_MM_SS(): string {
        return 'hh:mm:ss';
    }

    public static DATE_TIME_FMT(): string {
        return `${Config.DATE_FMT_DD_MM_YYYY()} ${Config.TIME_FMT_HH_MM_SS()}`;
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
