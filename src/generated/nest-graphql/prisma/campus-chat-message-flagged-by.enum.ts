import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatMessageFlaggedBy {
    ADMIN = "ADMIN",
    SYSTEM = "SYSTEM"
}


registerEnumType(CampusChatMessageFlaggedBy, { name: 'CampusChatMessageFlaggedBy', description: undefined })
