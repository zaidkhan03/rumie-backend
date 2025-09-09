import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { Type } from 'class-transformer';
import { ConversationCreateWithoutProductInput } from './conversation-create-without-product.input';

@InputType()
export class ConversationCreateOrConnectWithoutProductInput {

    @Field(() => ConversationWhereUniqueInput, {nullable:false})
    @Type(() => ConversationWhereUniqueInput)
    where!: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;

    @Field(() => ConversationCreateWithoutProductInput, {nullable:false})
    @Type(() => ConversationCreateWithoutProductInput)
    create!: ConversationCreateWithoutProductInput;
}
