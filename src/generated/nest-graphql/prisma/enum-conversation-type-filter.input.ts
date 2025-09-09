import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationType } from './conversation-type.enum';
import { NestedEnumConversationTypeFilter } from './nested-enum-conversation-type-filter.input';

@InputType()
export class EnumConversationTypeFilter {

    @Field(() => ConversationType, {nullable:true})
    equals?: `${ConversationType}`;

    @Field(() => [ConversationType], {nullable:true})
    in?: Array<`${ConversationType}`>;

    @Field(() => [ConversationType], {nullable:true})
    notIn?: Array<`${ConversationType}`>;

    @Field(() => NestedEnumConversationTypeFilter, {nullable:true})
    not?: NestedEnumConversationTypeFilter;
}
