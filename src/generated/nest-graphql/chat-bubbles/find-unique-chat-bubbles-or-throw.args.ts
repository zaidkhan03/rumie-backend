import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatBubblesWhereUniqueInput } from './chat-bubbles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueChatBubblesOrThrowArgs {

    @Field(() => ChatBubblesWhereUniqueInput, {nullable:false})
    @Type(() => ChatBubblesWhereUniqueInput)
    where!: Prisma.AtLeast<ChatBubblesWhereUniqueInput, 'id'>;
}
