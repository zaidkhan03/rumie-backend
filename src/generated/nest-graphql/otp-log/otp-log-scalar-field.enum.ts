import { registerEnumType } from '@nestjs/graphql';

export enum OtpLogScalarFieldEnum {
    id = "id",
    key = "key",
    otp = "otp",
    valid = "valid",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OtpLogScalarFieldEnum, { name: 'OtpLogScalarFieldEnum', description: undefined })
