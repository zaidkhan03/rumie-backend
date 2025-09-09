import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesUpdateInput } from './chat-bubbles-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ChatBubblesWhereUniqueInput } from './chat-bubbles-where-unique.input';

@ArgsType()
export class UpdateOneChatBubblesArgs {

    @Field(() => ChatBubblesUpdateInput, {nullable:false})
    @Type(() => ChatBubblesUpdateInput)
    data!: ChatBubblesUpdateInput;

    @Field(() => ChatBubblesWhereUniqueInput, {nullable:false})
    @Type(() => ChatBubblesWhereUniqueInput)
    where!: Prisma.AtLeast<ChatBubblesWhereUniqueInput, 'id'>;
}
