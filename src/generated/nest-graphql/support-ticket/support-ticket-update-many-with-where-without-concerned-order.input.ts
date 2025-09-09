import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketScalarWhereInput } from './support-ticket-scalar-where.input';
import { Type } from 'class-transformer';
import { SupportTicketUpdateManyMutationInput } from './support-ticket-update-many-mutation.input';

@InputType()
export class SupportTicketUpdateManyWithWhereWithoutConcernedOrderInput {

    @Field(() => SupportTicketScalarWhereInput, {nullable:false})
    @Type(() => SupportTicketScalarWhereInput)
    where!: SupportTicketScalarWhereInput;

    @Field(() => SupportTicketUpdateManyMutationInput, {nullable:false})
    @Type(() => SupportTicketUpdateManyMutationInput)
    data!: SupportTicketUpdateManyMutationInput;
}
