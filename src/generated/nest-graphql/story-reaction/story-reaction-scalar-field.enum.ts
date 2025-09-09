import { registerEnumType } from '@nestjs/graphql';

export enum StoryReactionScalarFieldEnum {
    id = "id",
    storyId = "storyId",
    userId = "userId",
    type = "type",
    active = "active",
    previousReactionId = "previousReactionId",
    removedAt = "removedAt",
    createdAt = "createdAt"
}


registerEnumType(StoryReactionScalarFieldEnum, { name: 'StoryReactionScalarFieldEnum', description: undefined })
