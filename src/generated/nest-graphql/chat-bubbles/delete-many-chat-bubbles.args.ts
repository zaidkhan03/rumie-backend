import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesWhereInput } from './chat-bubbles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyChatBubblesArgs {

    @Field(() => ChatBubblesWhereInput, {nullable:true})
    @Type(() => ChatBubblesWhereInput)
    where?: ChatBubblesWhereInput;
}
