import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationType } from './conversation-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumConversationTypeFilter } from './nested-enum-conversation-type-filter.input';

@InputType()
export class NestedEnumConversationTypeWithAggregatesFilter {

    @Field(() => ConversationType, {nullable:true})
    equals?: `${ConversationType}`;

    @Field(() => [ConversationType], {nullable:true})
    in?: Array<`${ConversationType}`>;

    @Field(() => [ConversationType], {nullable:true})
    notIn?: Array<`${ConversationType}`>;

    @Field(() => NestedEnumConversationTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumConversationTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumConversationTypeFilter, {nullable:true})
    _min?: NestedEnumConversationTypeFilter;

    @Field(() => NestedEnumConversationTypeFilter, {nullable:true})
    _max?: NestedEnumConversationTypeFilter;
}
