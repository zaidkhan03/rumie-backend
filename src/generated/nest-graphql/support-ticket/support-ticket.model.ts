import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SupportTicketType } from '../prisma/support-ticket-type.enum';
import { SupportMessage } from '../support-message/support-message.model';
import { SupportTicketParticipant } from '../prisma/support-ticket-participant.enum';
import { Order } from '../order/order.model';

@ObjectType()
export class SupportTicket {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => SupportTicketType, {nullable:false})
    type!: `${SupportTicketType}`;

    @Field(() => String, {nullable:false})
    issue!: string;

    @Field(() => [SupportMessage], {nullable:true})
    messages?: Array<SupportMessage>;

    @Field(() => SupportTicketParticipant, {nullable:false})
    initiator!: `${SupportTicketParticipant}`;

    @Field(() => String, {nullable:false})
    associatedUserId!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    resolved!: boolean;

    @Field(() => String, {nullable:true})
    concernedId!: string | null;

    @Field(() => String, {defaultValue:'DEFAULT',nullable:true})
    userLastSeen!: string | null;

    @Field(() => String, {defaultValue:'DEFAULT',nullable:true})
    adminLastSeen!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Order, {nullable:true})
    concernedOrder?: Order | null;
}
