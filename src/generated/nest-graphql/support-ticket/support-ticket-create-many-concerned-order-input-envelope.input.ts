import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketCreateManyConcernedOrderInput } from './support-ticket-create-many-concerned-order.input';
import { Type } from 'class-transformer';

@InputType()
export class SupportTicketCreateManyConcernedOrderInputEnvelope {

    @Field(() => [SupportTicketCreateManyConcernedOrderInput], {nullable:false})
    @Type(() => SupportTicketCreateManyConcernedOrderInput)
    data!: Array<SupportTicketCreateManyConcernedOrderInput>;
}
