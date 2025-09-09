import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { Type } from 'class-transformer';
import { ConversationUpdateWithoutParticipantsInput } from './conversation-update-without-participants.input';

@InputType()
export class ConversationUpdateWithWhereUniqueWithoutParticipantsInput {

    @Field(() => ConversationWhereUniqueInput, {nullable:false})
    @Type(() => ConversationWhereUniqueInput)
    where!: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;

    @Field(() => ConversationUpdateWithoutParticipantsInput, {nullable:false})
    @Type(() => ConversationUpdateWithoutParticipantsInput)
    data!: ConversationUpdateWithoutParticipantsInput;
}
