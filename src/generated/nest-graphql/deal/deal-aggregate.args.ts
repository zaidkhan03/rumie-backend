import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealWhereInput } from './deal-where.input';
import { Type } from 'class-transformer';
import { DealOrderByWithRelationInput } from './deal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DealCountAggregateInput } from './deal-count-aggregate.input';
import { DealMinAggregateInput } from './deal-min-aggregate.input';
import { DealMaxAggregateInput } from './deal-max-aggregate.input';

@ArgsType()
export class DealAggregateArgs {

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

    @Field(() => DealCountAggregateInput, {nullable:true})
    _count?: DealCountAggregateInput;

    @Field(() => DealMinAggregateInput, {nullable:true})
    _min?: DealMinAggregateInput;

    @Field(() => DealMaxAggregateInput, {nullable:true})
    _max?: DealMaxAggregateInput;
}
