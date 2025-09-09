import { registerEnumType } from '@nestjs/graphql';

export enum AdvertiserScalarFieldEnum {
    id = "id",
    companyName = "companyName",
    companyWebsiteUrl = "companyWebsiteUrl",
    logo = "logo",
    address1 = "address1",
    address2 = "address2",
    city = "city",
    state = "state",
    zip = "zip",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AdvertiserScalarFieldEnum, { name: 'AdvertiserScalarFieldEnum', description: undefined })
