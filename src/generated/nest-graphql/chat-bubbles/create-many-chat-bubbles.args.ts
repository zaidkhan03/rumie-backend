import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesCreateManyInput } from './chat-bubbles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChatBubblesArgs {

    @Field(() => [ChatBubblesCreateManyInput], {nullable:false})
    @Type(() => ChatBubblesCreateManyInput)
    data!: Array<ChatBubblesCreateManyInput>;
}
