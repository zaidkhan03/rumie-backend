import { registerEnumType } from '@nestjs/graphql';

export enum Platform {
    ANDROID = "ANDROID",
    IOS = "IOS",
    WEB = "WEB"
}


registerEnumType(Platform, { name: 'Platform', description: undefined })
