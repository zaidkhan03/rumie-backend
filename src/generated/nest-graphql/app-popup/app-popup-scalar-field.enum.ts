import { registerEnumType } from '@nestjs/graphql';

export enum AppPopupScalarFieldEnum {
    id = "id",
    name = "name",
    frequency = "frequency",
    selectionListType = "selectionListType",
    template = "template",
    image = "image",
    description = "description",
    ctaUrl = "ctaUrl",
    ctaText = "ctaText",
    couponCode = "couponCode",
    delayInSeconds = "delayInSeconds",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AppPopupScalarFieldEnum, { name: 'AppPopupScalarFieldEnum', description: undefined })
