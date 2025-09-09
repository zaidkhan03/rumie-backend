import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationWhereInput } from './conversation-where.input';
import { Type } from 'class-transformer';
import { ConversationOrderByWithRelationInput } from './conversation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConversationScalarFieldEnum } from './conversation-scalar-field.enum';

@ArgsType()
export class FindFirstConversationArgs {

    @Field(() => ConversationWhereInput, {nullable:true})
    @Type(() => ConversationWhereInput)
    where?: ConversationWhereInput;

    @Field(() => [ConversationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConversationOrderByWithRelationInput>;

    @Field(() => ConversationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ConversationScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ConversationScalarFieldEnum}`>;
}
