import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationCreateWithoutProductInput } from './conversation-create-without-product.input';
import { Type } from 'class-transformer';
import { ConversationCreateOrConnectWithoutProductInput } from './conversation-create-or-connect-without-product.input';
import { ConversationCreateManyProductInputEnvelope } from './conversation-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';

@InputType()
export class ConversationCreateNestedManyWithoutProductInput {

    @Field(() => [ConversationCreateWithoutProductInput], {nullable:true})
    @Type(() => ConversationCreateWithoutProductInput)
    create?: Array<ConversationCreateWithoutProductInput>;

    @Field(() => [ConversationCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ConversationCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ConversationCreateOrConnectWithoutProductInput>;

    @Field(() => ConversationCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ConversationCreateManyProductInputEnvelope)
    createMany?: ConversationCreateManyProductInputEnvelope;

    @Field(() => [ConversationWhereUniqueInput], {nullable:true})
    @Type(() => ConversationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>>;
}
