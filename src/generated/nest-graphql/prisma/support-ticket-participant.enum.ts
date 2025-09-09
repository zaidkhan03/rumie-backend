import { registerEnumType } from '@nestjs/graphql';

export enum SupportTicketParticipant {
    ADMIN = "ADMIN",
    USER = "USER"
}


registerEnumType(SupportTicketParticipant, { name: 'SupportTicketParticipant', description: undefined })
