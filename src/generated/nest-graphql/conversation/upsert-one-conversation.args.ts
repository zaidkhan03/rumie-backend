import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { Type } from 'class-transformer';
import { ConversationCreateInput } from './conversation-create.input';
import { ConversationUpdateInput } from './conversation-update.input';

@ArgsType()
export class UpsertOneConversationArgs {

    @Field(() => ConversationWhereUniqueInput, {nullable:false})
    @Type(() => ConversationWhereUniqueInput)
    where!: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;

    @Field(() => ConversationCreateInput, {nullable:false})
    @Type(() => ConversationCreateInput)
    create!: ConversationCreateInput;

    @Field(() => ConversationUpdateInput, {nullable:false})
    @Type(() => ConversationUpdateInput)
    update!: ConversationUpdateInput;
}
