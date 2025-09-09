import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketType } from './support-ticket-type.enum';
import { NestedEnumSupportTicketTypeWithAggregatesFilter } from './nested-enum-support-ticket-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSupportTicketTypeFilter } from './nested-enum-support-ticket-type-filter.input';

@InputType()
export class EnumSupportTicketTypeWithAggregatesFilter {

    @Field(() => SupportTicketType, {nullable:true})
    equals?: `${SupportTicketType}`;

    @Field(() => [SupportTicketType], {nullable:true})
    in?: Array<`${SupportTicketType}`>;

    @Field(() => [SupportTicketType], {nullable:true})
    notIn?: Array<`${SupportTicketType}`>;

    @Field(() => NestedEnumSupportTicketTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSupportTicketTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSupportTicketTypeFilter, {nullable:true})
    _min?: NestedEnumSupportTicketTypeFilter;

    @Field(() => NestedEnumSupportTicketTypeFilter, {nullable:true})
    _max?: NestedEnumSupportTicketTypeFilter;
}
