import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationUpdateInput } from './conversation-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';

@ArgsType()
export class UpdateOneConversationArgs {

    @Field(() => ConversationUpdateInput, {nullable:false})
    @Type(() => ConversationUpdateInput)
    data!: ConversationUpdateInput;

    @Field(() => ConversationWhereUniqueInput, {nullable:false})
    @Type(() => ConversationWhereUniqueInput)
    where!: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;
}
