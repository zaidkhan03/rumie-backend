import { registerEnumType } from '@nestjs/graphql';

export enum PayoutRequestLogScalarFieldEnum {
    id = "id",
    email = "email",
    valid = "valid",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PayoutRequestLogScalarFieldEnum, { name: 'PayoutRequestLogScalarFieldEnum', description: undefined })
