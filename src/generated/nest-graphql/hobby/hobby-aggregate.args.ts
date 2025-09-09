import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyWhereInput } from './hobby-where.input';
import { Type } from 'class-transformer';
import { HobbyOrderByWithRelationInput } from './hobby-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HobbyCountAggregateInput } from './hobby-count-aggregate.input';
import { HobbyMinAggregateInput } from './hobby-min-aggregate.input';
import { HobbyMaxAggregateInput } from './hobby-max-aggregate.input';

@ArgsType()
export class HobbyAggregateArgs {

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

    @Field(() => HobbyCountAggregateInput, {nullable:true})
    _count?: HobbyCountAggregateInput;

    @Field(() => HobbyMinAggregateInput, {nullable:true})
    _min?: HobbyMinAggregateInput;

    @Field(() => HobbyMaxAggregateInput, {nullable:true})
    _max?: HobbyMaxAggregateInput;
}
