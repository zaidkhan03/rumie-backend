import { registerEnumType } from '@nestjs/graphql';

export enum AltSignupStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}


registerEnumType(AltSignupStatus, { name: 'AltSignupStatus', description: undefined })
