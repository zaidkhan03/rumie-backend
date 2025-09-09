import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationCreateWithoutProductInput } from './conversation-create-without-product.input';
import { Type } from 'class-transformer';
import { ConversationCreateOrConnectWithoutProductInput } from './conversation-create-or-connect-without-product.input';
import { ConversationUpsertWithWhereUniqueWithoutProductInput } from './conversation-upsert-with-where-unique-without-product.input';
import { ConversationCreateManyProductInputEnvelope } from './conversation-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { ConversationUpdateWithWhereUniqueWithoutProductInput } from './conversation-update-with-where-unique-without-product.input';
import { ConversationUpdateManyWithWhereWithoutProductInput } from './conversation-update-many-with-where-without-product.input';
import { ConversationScalarWhereInput } from './conversation-scalar-where.input';

@InputType()
export class ConversationUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ConversationCreateWithoutProductInput], {nullable:true})
    @Type(() => ConversationCreateWithoutProductInput)
    create?: Array<ConversationCreateWithoutProductInput>;

    @Field(() => [ConversationCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ConversationCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ConversationCreateOrConnectWithoutProductInput>;

    @Field(() => [ConversationUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ConversationUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ConversationUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ConversationCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ConversationCreateManyProductInputEnvelope)
    createMany?: ConversationCreateManyProductInputEnvelope;

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

    @Field(() => [ConversationUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ConversationUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ConversationUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ConversationUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ConversationUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ConversationUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ConversationScalarWhereInput], {nullable:true})
    @Type(() => ConversationScalarWhereInput)
    deleteMany?: Array<ConversationScalarWhereInput>;
}
