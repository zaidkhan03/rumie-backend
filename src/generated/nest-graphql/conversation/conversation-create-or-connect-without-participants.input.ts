import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { Type } from 'class-transformer';
import { ConversationCreateWithoutParticipantsInput } from './conversation-create-without-participants.input';

@InputType()
export class ConversationCreateOrConnectWithoutParticipantsInput {

    @Field(() => ConversationWhereUniqueInput, {nullable:false})
    @Type(() => ConversationWhereUniqueInput)
    where!: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;

    @Field(() => ConversationCreateWithoutParticipantsInput, {nullable:false})
    @Type(() => ConversationCreateWithoutParticipantsInput)
    create!: ConversationCreateWithoutParticipantsInput;
}
