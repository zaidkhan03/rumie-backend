import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesUpdateManyMutationInput } from './chat-bubbles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChatBubblesWhereInput } from './chat-bubbles-where.input';

@ArgsType()
export class UpdateManyChatBubblesArgs {

    @Field(() => ChatBubblesUpdateManyMutationInput, {nullable:false})
    @Type(() => ChatBubblesUpdateManyMutationInput)
    data!: ChatBubblesUpdateManyMutationInput;

    @Field(() => ChatBubblesWhereInput, {nullable:true})
    @Type(() => ChatBubblesWhereInput)
    where?: ChatBubblesWhereInput;
}
