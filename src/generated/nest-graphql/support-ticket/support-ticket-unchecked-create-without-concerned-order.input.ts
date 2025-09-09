import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketType } from '../prisma/support-ticket-type.enum';
import { SupportMessageCreateInput } from '../support-message/support-message-create.input';
import { SupportTicketParticipant } from '../prisma/support-ticket-participant.enum';

@InputType()
export class SupportTicketUncheckedCreateWithoutConcernedOrderInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SupportTicketType, {nullable:false})
    type!: `${SupportTicketType}`;

    @Field(() => String, {nullable:false})
    issue!: string;

    @Field(() => [SupportMessageCreateInput], {nullable:true})
    messages?: Array<SupportMessageCreateInput>;

    @Field(() => SupportTicketParticipant, {nullable:false})
    initiator!: `${SupportTicketParticipant}`;

    @Field(() => String, {nullable:false})
    associatedUserId!: string;

    @Field(() => Boolean, {nullable:true})
    resolved?: boolean;

    @Field(() => String, {nullable:true})
    userLastSeen?: string;

    @Field(() => String, {nullable:true})
    adminLastSeen?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
