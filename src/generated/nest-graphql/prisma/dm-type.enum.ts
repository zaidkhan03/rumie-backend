import { registerEnumType } from '@nestjs/graphql';

export enum DMType {
    TEXT = "TEXT",
    STORY_SHARE = "STORY_SHARE"
}


registerEnumType(DMType, { name: 'DMType', description: undefined })
