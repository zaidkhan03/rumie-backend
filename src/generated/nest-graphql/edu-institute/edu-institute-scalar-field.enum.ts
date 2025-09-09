import { registerEnumType } from '@nestjs/graphql';

export enum EduInstituteScalarFieldEnum {
    id = "id",
    name = "name",
    domain = "domain",
    logo = "logo",
    city = "city",
    state = "state",
    address = "address",
    zip = "zip",
    location = "location",
    active = "active",
    passCode = "passCode",
    isRegistered = "isRegistered",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EduInstituteScalarFieldEnum, { name: 'EduInstituteScalarFieldEnum', description: undefined })
