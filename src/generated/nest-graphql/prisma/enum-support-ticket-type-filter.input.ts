import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketType } from './support-ticket-type.enum';
import { NestedEnumSupportTicketTypeFilter } from './nested-enum-support-ticket-type-filter.input';

@InputType()
export class EnumSupportTicketTypeFilter {

    @Field(() => SupportTicketType, {nullable:true})
    equals?: `${SupportTicketType}`;

    @Field(() => [SupportTicketType], {nullable:true})
    in?: Array<`${SupportTicketType}`>;

    @Field(() => [SupportTicketType], {nullable:true})
    notIn?: Array<`${SupportTicketType}`>;

    @Field(() => NestedEnumSupportTicketTypeFilter, {nullable:true})
    not?: NestedEnumSupportTicketTypeFilter;
}
