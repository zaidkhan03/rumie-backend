import { registerEnumType } from '@nestjs/graphql';

export enum AppLovingAdType {
    BANNER = "BANNER",
    NATIVE = "NATIVE"
}


registerEnumType(AppLovingAdType, { name: 'AppLovingAdType', description: undefined })
