import { registerEnumType } from '@nestjs/graphql';

export enum PromoCodeScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    active = "active",
    type = "type",
    value = "value",
    usageLimit = "usageLimit",
    useCount = "useCount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PromoCodeScalarFieldEnum, { name: 'PromoCodeScalarFieldEnum', description: undefined })
