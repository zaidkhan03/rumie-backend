import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyWhereInput } from './hobby-where.input';
import { Type } from 'class-transformer';
import { HobbyOrderByWithRelationInput } from './hobby-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HobbyScalarFieldEnum } from './hobby-scalar-field.enum';

@ArgsType()
export class FindFirstHobbyOrThrowArgs {

    @Field(() => HobbyWhereInput, {nullable:true})
    @Type(() => HobbyWhereInput)
    where?: HobbyWhereInput;

    @Field(() => [HobbyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HobbyOrderByWithRelationInput>;

    @Field(() => HobbyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HobbyScalarFieldEnum], {nullable:true})
    distinct?: Array<`${HobbyScalarFieldEnum}`>;
}
