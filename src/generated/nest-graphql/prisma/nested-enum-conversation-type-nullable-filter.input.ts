import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationType } from './conversation-type.enum';

@InputType()
export class NestedEnumConversationTypeNullableFilter {

    @Field(() => ConversationType, {nullable:true})
    equals?: `${ConversationType}`;

    @Field(() => [ConversationType], {nullable:true})
    in?: Array<`${ConversationType}`>;

    @Field(() => [ConversationType], {nullable:true})
    notIn?: Array<`${ConversationType}`>;

    @Field(() => NestedEnumConversationTypeNullableFilter, {nullable:true})
    not?: NestedEnumConversationTypeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
