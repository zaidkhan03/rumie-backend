import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatMessageType {
    TEXT = "TEXT",
    PRODUCT_SHARE = "PRODUCT_SHARE",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    SYSTEM_NOTIFICATION = "SYSTEM_NOTIFICATION",
    EVENT = "EVENT"
}


registerEnumType(CampusChatMessageType, { name: 'CampusChatMessageType', description: undefined })
