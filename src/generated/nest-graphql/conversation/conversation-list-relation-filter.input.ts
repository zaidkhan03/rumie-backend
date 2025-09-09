import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationWhereInput } from './conversation-where.input';

@InputType()
export class ConversationListRelationFilter {

    @Field(() => ConversationWhereInput, {nullable:true})
    every?: ConversationWhereInput;

    @Field(() => ConversationWhereInput, {nullable:true})
    some?: ConversationWhereInput;

    @Field(() => ConversationWhereInput, {nullable:true})
    none?: ConversationWhereInput;
}
