import { registerEnumType } from '@nestjs/graphql';

export enum OfferNotificationType {
    RECEIVED = "RECEIVED",
    WITHDRAWN = "WITHDRAWN",
    REJECTED = "REJECTED",
    ACCEPTED = "ACCEPTED",
    COUNTERED = "COUNTERED"
}


registerEnumType(OfferNotificationType, { name: 'OfferNotificationType', description: undefined })
