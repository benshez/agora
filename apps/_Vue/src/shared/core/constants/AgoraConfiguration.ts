import {
  IAppSettings,
  IMapBoxSettings,
  IGlobalEvents,
  AgoraPrivateConfiguration
} from '../';

export class AgoraConfiguration {
  public static ENVIRONMENT(): string {
    return process.env.NODE_ENV;
  }

  public static IS_LIVE_ENVIRONMENT(): boolean {
    return this.ENVIRONMENT() === 'production';
  }

  public static IS_TEST_ENVIRONMENT(): boolean {
    return this.ENVIRONMENT() === 'test';
  }

  public static IS_DEV_ENVIRONMENT(): boolean {
    return this.ENVIRONMENT() === 'development';
  }

  public static APP_API(): string {
    if (this.IS_LIVE_ENVIRONMENT()) return 'http://192.168.1.14:8000/api/1';
    if (this.IS_TEST_ENVIRONMENT()) return 'http://192.168.1.14:8000/api/1';
    if (this.IS_DEV_ENVIRONMENT()) return 'http://agora.api:8000/api/1';
    return '';
  }

  public static APP_GLOBAL_EVENTS(): IGlobalEvents {
    return { TOGGLE_LOGIN_COMPONENTS: 'TOGGLE_LOGIN_COMPONENTS' };
  }

  public static APP_SETTINGS: IAppSettings = {
    API: AgoraConfiguration.APP_API(),
    APP_NAME: 'Agora',
    APP_NAME_TO_UPPER: 'AGORA',
    APP_ROUTES: {
      LOGIN_ROUTE: `${AgoraConfiguration.APP_API()}/user/login`,
      ADD_USER_ROUTE: `${AgoraConfiguration.APP_API()}/user`,
      GET_USER_ROLES_ROUTE: `${AgoraConfiguration.APP_API()}/roles/`
    },
    STORE_NAMESPACED: true,
    STORE_STRICT_MODE: false
  };

  public static MAPBOX_SETTINGS: IMapBoxSettings = {
    MAPBOX_ACCESS_TOKEN: AgoraPrivateConfiguration.API_KEYS.MAP_BOX_API_KEY,
    MAPBOX_MAP_STYLES: {
      TRAFFIC_DAY: 'mapbox://styles/mapbox/traffic-day-v2',
      TRAFFIC_NIGHT: 'mapbox://styles/mapbox/traffic-night-v2',
      SATELLITE_STREETS: 'mapbox://styles/mapbox/satellite-streets-v10',
      SATELLITE: 'mapbox://styles/mapbox/satellite-v9',
      STREET: 'mapbox://styles/mapbox/streets-v10',
      DARK: 'mapbox://styles/mapbox/dark-v9',
      LIGHT: 'mapbox://styles/mapbox/light-v9',
      OUTDOORS: 'mapbox://styles/mapbox/outdoors-v10'
    }
  };

  public static DEBUG = {
    LEVEL_1: false, // .info only
    LEVEL_2: false, // .warn only
    LEVEL_3: false, // .error only
    LEVEL_4: false // .log + all the above
  };
}
