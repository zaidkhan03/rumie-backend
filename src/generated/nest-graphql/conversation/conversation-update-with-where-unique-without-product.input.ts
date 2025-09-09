import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { Type } from 'class-transformer';
import { ConversationUpdateWithoutProductInput } from './conversation-update-without-product.input';

@InputType()
export class ConversationUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ConversationWhereUniqueInput, {nullable:false})
    @Type(() => ConversationWhereUniqueInput)
    where!: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;

    @Field(() => ConversationUpdateWithoutProductInput, {nullable:false})
    @Type(() => ConversationUpdateWithoutProductInput)
    data!: ConversationUpdateWithoutProductInput;
}
