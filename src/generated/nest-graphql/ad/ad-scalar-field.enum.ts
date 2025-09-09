import { registerEnumType } from '@nestjs/graphql';

export enum AdScalarFieldEnum {
    id = "id",
    type = "type",
    visibility = "visibility",
    title = "title",
    image = "image",
    url = "url",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    advertiserName = "advertiserName",
    advertiserId = "advertiserId",
    monthlyBudget = "monthlyBudget",
    priority = "priority",
    targetGenders = "targetGenders"
}


registerEnumType(AdScalarFieldEnum, { name: 'AdScalarFieldEnum', description: undefined })
