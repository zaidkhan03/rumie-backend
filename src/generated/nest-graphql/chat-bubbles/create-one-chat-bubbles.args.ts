import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesCreateInput } from './chat-bubbles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChatBubblesArgs {

    @Field(() => ChatBubblesCreateInput, {nullable:false})
    @Type(() => ChatBubblesCreateInput)
    data!: ChatBubblesCreateInput;
}
