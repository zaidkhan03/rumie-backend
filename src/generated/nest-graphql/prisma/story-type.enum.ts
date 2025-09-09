import { registerEnumType } from '@nestjs/graphql';

export enum StoryType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    PRODUCT = "PRODUCT"
}


registerEnumType(StoryType, { name: 'StoryType', description: undefined })
