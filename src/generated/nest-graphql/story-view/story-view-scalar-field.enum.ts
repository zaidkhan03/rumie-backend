import { registerEnumType } from '@nestjs/graphql';

export enum StoryViewScalarFieldEnum {
    id = "id",
    storyId = "storyId",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(StoryViewScalarFieldEnum, { name: 'StoryViewScalarFieldEnum', description: undefined })
