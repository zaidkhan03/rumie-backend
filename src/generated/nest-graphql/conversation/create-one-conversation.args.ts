import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationCreateInput } from './conversation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneConversationArgs {

    @Field(() => ConversationCreateInput, {nullable:false})
    @Type(() => ConversationCreateInput)
    data!: ConversationCreateInput;
}
