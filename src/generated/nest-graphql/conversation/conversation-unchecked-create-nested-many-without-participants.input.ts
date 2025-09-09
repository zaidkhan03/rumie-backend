import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationCreateWithoutParticipantsInput } from './conversation-create-without-participants.input';
import { Type } from 'class-transformer';
import { ConversationCreateOrConnectWithoutParticipantsInput } from './conversation-create-or-connect-without-participants.input';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';

@InputType()
export class ConversationUncheckedCreateNestedManyWithoutParticipantsInput {

    @Field(() => [ConversationCreateWithoutParticipantsInput], {nullable:true})
    @Type(() => ConversationCreateWithoutParticipantsInput)
    create?: Array<ConversationCreateWithoutParticipantsInput>;

    @Field(() => [ConversationCreateOrConnectWithoutParticipantsInput], {nullable:true})
    @Type(() => ConversationCreateOrConnectWithoutParticipantsInput)
    connectOrCreate?: Array<ConversationCreateOrConnectWithoutParticipantsInput>;

    @Field(() => [ConversationWhereUniqueInput], {nullable:true})
    @Type(() => ConversationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>>;
}
