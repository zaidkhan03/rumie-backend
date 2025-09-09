import { registerEnumType } from '@nestjs/graphql';

export enum AnnouncementBannerScalarFieldEnum {
    id = "id",
    name = "name",
    position = "position",
    hasInternalCTA = "hasInternalCTA",
    internalCTA = "internalCTA",
    image = "image",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AnnouncementBannerScalarFieldEnum, { name: 'AnnouncementBannerScalarFieldEnum', description: undefined })
