import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationCreateManyInput } from './conversation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyConversationArgs {

    @Field(() => [ConversationCreateManyInput], {nullable:false})
    @Type(() => ConversationCreateManyInput)
    data!: Array<ConversationCreateManyInput>;
}
