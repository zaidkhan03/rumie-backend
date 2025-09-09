import { registerEnumType } from '@nestjs/graphql';

export enum StoryScalarFieldEnum {
    id = "id",
    userId = "userId",
    type = "type",
    content = "content",
    caption = "caption",
    backgroundColor = "backgroundColor",
    viewCount = "viewCount",
    eduInstituteId = "eduInstituteId",
    expiresAt = "expiresAt",
    archived = "archived",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(StoryScalarFieldEnum, { name: 'StoryScalarFieldEnum', description: undefined })
