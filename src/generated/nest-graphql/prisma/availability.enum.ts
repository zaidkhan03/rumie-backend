import { registerEnumType } from '@nestjs/graphql';

export enum Availability {
    ALL = "ALL",
    SUNDAY = "SUNDAY",
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY"
}


registerEnumType(Availability, { name: 'Availability', description: undefined })
