import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationWhereInput } from './conversation-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyConversationArgs {

    @Field(() => ConversationWhereInput, {nullable:true})
    @Type(() => ConversationWhereInput)
    where?: ConversationWhereInput;
}
