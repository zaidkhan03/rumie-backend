import { registerEnumType } from '@nestjs/graphql';

export enum AddressType {
    COLLEGE = "COLLEGE",
    RESIDENCE = "RESIDENCE",
    PUBLIC = "PUBLIC"
}


registerEnumType(AddressType, { name: 'AddressType', description: undefined })
