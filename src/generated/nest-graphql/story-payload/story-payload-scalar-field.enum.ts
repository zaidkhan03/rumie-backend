import { registerEnumType } from '@nestjs/graphql';

export enum StoryPayloadScalarFieldEnum {
    id = "id"
}


registerEnumType(StoryPayloadScalarFieldEnum, { name: 'StoryPayloadScalarFieldEnum', description: undefined })
