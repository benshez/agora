import { AgoraCommonModule } from '@common/module';
import { HeaderComponent } from '@components/header/components/header/component';

export const COMPONENT_MODULES: Array<any> = [
    AgoraCommonModule.forRoot([])
];

export const COMPONENT_DECLARATIONS: Array<any> = [HeaderComponent];
