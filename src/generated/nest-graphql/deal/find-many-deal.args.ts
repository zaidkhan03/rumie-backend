import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealWhereInput } from './deal-where.input';
import { Type } from 'class-transformer';
import { DealOrderByWithRelationInput } from './deal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DealScalarFieldEnum } from './deal-scalar-field.enum';

@ArgsType()
export class FindManyDealArgs {

    @Field(() => DealWhereInput, {nullable:true})
    @Type(() => DealWhereInput)
    where?: DealWhereInput;

    @Field(() => [DealOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DealOrderByWithRelationInput>;

    @Field(() => DealWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DealWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DealScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DealScalarFieldEnum}`>;
}
