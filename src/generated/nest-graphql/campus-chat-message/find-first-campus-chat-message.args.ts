import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessageWhereInput } from './campus-chat-message-where.input';
import { Type } from 'class-transformer';
import { CampusChatMessageOrderByWithRelationInput } from './campus-chat-message-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CampusChatMessageWhereUniqueInput } from './campus-chat-message-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampusChatMessageScalarFieldEnum } from './campus-chat-message-scalar-field.enum';

@ArgsType()
export class FindFirstCampusChatMessageArgs {

    @Field(() => CampusChatMessageWhereInput, {nullable:true})
    @Type(() => CampusChatMessageWhereInput)
    where?: CampusChatMessageWhereInput;

    @Field(() => [CampusChatMessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampusChatMessageOrderByWithRelationInput>;

    @Field(() => CampusChatMessageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CampusChatMessageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CampusChatMessageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CampusChatMessageScalarFieldEnum}`>;
}
