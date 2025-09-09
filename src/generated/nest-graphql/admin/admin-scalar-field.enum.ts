import { registerEnumType } from '@nestjs/graphql';

export enum AdminScalarFieldEnum {
    id = "id",
    name = "name",
    username = "username",
    password = "password",
    countryCode = "countryCode",
    phoneNumber = "phoneNumber",
    email = "email",
    roles = "roles"
}


registerEnumType(AdminScalarFieldEnum, { name: 'AdminScalarFieldEnum', description: undefined })
