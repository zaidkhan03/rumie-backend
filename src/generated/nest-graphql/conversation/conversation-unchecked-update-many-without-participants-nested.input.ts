import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationCreateWithoutParticipantsInput } from './conversation-create-without-participants.input';
import { Type } from 'class-transformer';
import { ConversationCreateOrConnectWithoutParticipantsInput } from './conversation-create-or-connect-without-participants.input';
import { ConversationUpsertWithWhereUniqueWithoutParticipantsInput } from './conversation-upsert-with-where-unique-without-participants.input';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { ConversationUpdateWithWhereUniqueWithoutParticipantsInput } from './conversation-update-with-where-unique-without-participants.input';
import { ConversationUpdateManyWithWhereWithoutParticipantsInput } from './conversation-update-many-with-where-without-participants.input';
import { ConversationScalarWhereInput } from './conversation-scalar-where.input';

@InputType()
export class ConversationUncheckedUpdateManyWithoutParticipantsNestedInput {

    @Field(() => [ConversationCreateWithoutParticipantsInput], {nullable:true})
    @Type(() => ConversationCreateWithoutParticipantsInput)
    create?: Array<ConversationCreateWithoutParticipantsInput>;

    @Field(() => [ConversationCreateOrConnectWithoutParticipantsInput], {nullable:true})
    @Type(() => ConversationCreateOrConnectWithoutParticipantsInput)
    connectOrCreate?: Array<ConversationCreateOrConnectWithoutParticipantsInput>;

    @Field(() => [ConversationUpsertWithWhereUniqueWithoutParticipantsInput], {nullable:true})
    @Type(() => ConversationUpsertWithWhereUniqueWithoutParticipantsInput)
    upsert?: Array<ConversationUpsertWithWhereUniqueWithoutParticipantsInput>;

    @Field(() => [ConversationWhereUniqueInput], {nullable:true})
    @Type(() => ConversationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>>;

    @Field(() => [ConversationWhereUniqueInput], {nullable:true})
    @Type(() => ConversationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>>;

    @Field(() => [ConversationWhereUniqueInput], {nullable:true})
    @Type(() => ConversationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>>;

    @Field(() => [ConversationWhereUniqueInput], {nullable:true})
    @Type(() => ConversationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>>;

    @Field(() => [ConversationUpdateWithWhereUniqueWithoutParticipantsInput], {nullable:true})
    @Type(() => ConversationUpdateWithWhereUniqueWithoutParticipantsInput)
    update?: Array<ConversationUpdateWithWhereUniqueWithoutParticipantsInput>;

    @Field(() => [ConversationUpdateManyWithWhereWithoutParticipantsInput], {nullable:true})
    @Type(() => ConversationUpdateManyWithWhereWithoutParticipantsInput)
    updateMany?: Array<ConversationUpdateManyWithWhereWithoutParticipantsInput>;

    @Field(() => [ConversationScalarWhereInput], {nullable:true})
    @Type(() => ConversationScalarWhereInput)
    deleteMany?: Array<ConversationScalarWhereInput>;
}
