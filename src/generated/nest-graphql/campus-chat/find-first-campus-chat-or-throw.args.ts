import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatWhereInput } from './campus-chat-where.input';
import { Type } from 'class-transformer';
import { CampusChatOrderByWithRelationInput } from './campus-chat-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampusChatScalarFieldEnum } from './campus-chat-scalar-field.enum';

@ArgsType()
export class FindFirstCampusChatOrThrowArgs {

    @Field(() => CampusChatWhereInput, {nullable:true})
    @Type(() => CampusChatWhereInput)
    where?: CampusChatWhereInput;

    @Field(() => [CampusChatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampusChatOrderByWithRelationInput>;

    @Field(() => CampusChatWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CampusChatScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CampusChatScalarFieldEnum}`>;
}
