import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesWhereInput } from './chat-bubbles-where.input';
import { Type } from 'class-transformer';
import { ChatBubblesOrderByWithRelationInput } from './chat-bubbles-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChatBubblesWhereUniqueInput } from './chat-bubbles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatBubblesScalarFieldEnum } from './chat-bubbles-scalar-field.enum';

@ArgsType()
export class FindFirstChatBubblesArgs {

    @Field(() => ChatBubblesWhereInput, {nullable:true})
    @Type(() => ChatBubblesWhereInput)
    where?: ChatBubblesWhereInput;

    @Field(() => [ChatBubblesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatBubblesOrderByWithRelationInput>;

    @Field(() => ChatBubblesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChatBubblesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChatBubblesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ChatBubblesScalarFieldEnum}`>;
}
