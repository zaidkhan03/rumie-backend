import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatBubblesWhereUniqueInput } from './chat-bubbles-where-unique.input';
import { Type } from 'class-transformer';
import { ChatBubblesCreateInput } from './chat-bubbles-create.input';
import { ChatBubblesUpdateInput } from './chat-bubbles-update.input';

@ArgsType()
export class UpsertOneChatBubblesArgs {

    @Field(() => ChatBubblesWhereUniqueInput, {nullable:false})
    @Type(() => ChatBubblesWhereUniqueInput)
    where!: Prisma.AtLeast<ChatBubblesWhereUniqueInput, 'id'>;

    @Field(() => ChatBubblesCreateInput, {nullable:false})
    @Type(() => ChatBubblesCreateInput)
    create!: ChatBubblesCreateInput;

    @Field(() => ChatBubblesUpdateInput, {nullable:false})
    @Type(() => ChatBubblesUpdateInput)
    update!: ChatBubblesUpdateInput;
}
