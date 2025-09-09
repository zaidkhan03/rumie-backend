import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceWhereInput } from './shopping-preference-where.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceOrderByWithRelationInput } from './shopping-preference-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShoppingPreferenceCountAggregateInput } from './shopping-preference-count-aggregate.input';
import { ShoppingPreferenceMinAggregateInput } from './shopping-preference-min-aggregate.input';
import { ShoppingPreferenceMaxAggregateInput } from './shopping-preference-max-aggregate.input';

@ArgsType()
export class ShoppingPreferenceAggregateArgs {

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    @Type(() => ShoppingPreferenceWhereInput)
    where?: ShoppingPreferenceWhereInput;

    @Field(() => [ShoppingPreferenceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShoppingPreferenceOrderByWithRelationInput>;

    @Field(() => ShoppingPreferenceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShoppingPreferenceCountAggregateInput, {nullable:true})
    _count?: ShoppingPreferenceCountAggregateInput;

    @Field(() => ShoppingPreferenceMinAggregateInput, {nullable:true})
    _min?: ShoppingPreferenceMinAggregateInput;

    @Field(() => ShoppingPreferenceMaxAggregateInput, {nullable:true})
    _max?: ShoppingPreferenceMaxAggregateInput;
}
