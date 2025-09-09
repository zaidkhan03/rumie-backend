import { registerEnumType } from '@nestjs/graphql';

export enum RentalNotificationType {
    STARTED = "STARTED",
    ENDED = "ENDED"
}


registerEnumType(RentalNotificationType, { name: 'RentalNotificationType', description: undefined })
