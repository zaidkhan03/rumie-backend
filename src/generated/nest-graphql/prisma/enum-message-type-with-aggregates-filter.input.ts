import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageType } from './message-type.enum';
import { NestedEnumMessageTypeWithAggregatesFilter } from './nested-enum-message-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMessageTypeFilter } from './nested-enum-message-type-filter.input';

@InputType()
export class EnumMessageTypeWithAggregatesFilter {

    @Field(() => MessageType, {nullable:true})
    equals?: `${MessageType}`;

    @Field(() => [MessageType], {nullable:true})
    in?: Array<`${MessageType}`>;

    @Field(() => [MessageType], {nullable:true})
    notIn?: Array<`${MessageType}`>;

    @Field(() => NestedEnumMessageTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMessageTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMessageTypeFilter, {nullable:true})
    _min?: NestedEnumMessageTypeFilter;

    @Field(() => NestedEnumMessageTypeFilter, {nullable:true})
    _max?: NestedEnumMessageTypeFilter;
}
