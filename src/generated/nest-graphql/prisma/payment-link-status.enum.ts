import { registerEnumType } from '@nestjs/graphql';

export enum PaymentLinkStatus {
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED"
}


registerEnumType(PaymentLinkStatus, { name: 'PaymentLinkStatus', description: undefined })
