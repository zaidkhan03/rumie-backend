import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordWhereInput } from './banned-word-where.input';
import { Type } from 'class-transformer';
import { BannedWordOrderByWithRelationInput } from './banned-word-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BannedWordCountAggregateInput } from './banned-word-count-aggregate.input';
import { BannedWordMinAggregateInput } from './banned-word-min-aggregate.input';
import { BannedWordMaxAggregateInput } from './banned-word-max-aggregate.input';

@ArgsType()
export class BannedWordAggregateArgs {

    @Field(() => BannedWordWhereInput, {nullable:true})
    @Type(() => BannedWordWhereInput)
    where?: BannedWordWhereInput;

    @Field(() => [BannedWordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannedWordOrderByWithRelationInput>;

    @Field(() => BannedWordWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BannedWordCountAggregateInput, {nullable:true})
    _count?: BannedWordCountAggregateInput;

    @Field(() => BannedWordMinAggregateInput, {nullable:true})
    _min?: BannedWordMinAggregateInput;

    @Field(() => BannedWordMaxAggregateInput, {nullable:true})
    _max?: BannedWordMaxAggregateInput;
}
