import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketWhereInput } from './support-ticket-where.input';

@InputType()
export class SupportTicketListRelationFilter {

    @Field(() => SupportTicketWhereInput, {nullable:true})
    every?: SupportTicketWhereInput;

    @Field(() => SupportTicketWhereInput, {nullable:true})
    some?: SupportTicketWhereInput;

    @Field(() => SupportTicketWhereInput, {nullable:true})
    none?: SupportTicketWhereInput;
}
