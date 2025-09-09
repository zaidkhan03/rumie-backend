import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketType } from './support-ticket-type.enum';

@InputType()
export class NestedEnumSupportTicketTypeFilter {

    @Field(() => SupportTicketType, {nullable:true})
    equals?: `${SupportTicketType}`;

    @Field(() => [SupportTicketType], {nullable:true})
    in?: Array<`${SupportTicketType}`>;

    @Field(() => [SupportTicketType], {nullable:true})
    notIn?: Array<`${SupportTicketType}`>;

    @Field(() => NestedEnumSupportTicketTypeFilter, {nullable:true})
    not?: NestedEnumSupportTicketTypeFilter;
}
