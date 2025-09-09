import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereInput } from './ad-where.input';
import { Type } from 'class-transformer';
import { AdOrderByWithRelationInput } from './ad-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdScalarFieldEnum } from './ad-scalar-field.enum';

@ArgsType()
export class FindFirstAdArgs {

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    where?: AdWhereInput;

    @Field(() => [AdOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdOrderByWithRelationInput>;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AdScalarFieldEnum}`>;
}
