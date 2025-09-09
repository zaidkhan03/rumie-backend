import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingWhereInput } from './listing-setting-where.input';
import { Type } from 'class-transformer';
import { ListingSettingOrderByWithRelationInput } from './listing-setting-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ListingSettingWhereUniqueInput } from './listing-setting-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ListingSettingCountAggregateInput } from './listing-setting-count-aggregate.input';
import { ListingSettingAvgAggregateInput } from './listing-setting-avg-aggregate.input';
import { ListingSettingSumAggregateInput } from './listing-setting-sum-aggregate.input';
import { ListingSettingMinAggregateInput } from './listing-setting-min-aggregate.input';
import { ListingSettingMaxAggregateInput } from './listing-setting-max-aggregate.input';

@ArgsType()
export class ListingSettingAggregateArgs {

    @Field(() => ListingSettingWhereInput, {nullable:true})
    @Type(() => ListingSettingWhereInput)
    where?: ListingSettingWhereInput;

    @Field(() => [ListingSettingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListingSettingOrderByWithRelationInput>;

    @Field(() => ListingSettingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ListingSettingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ListingSettingCountAggregateInput, {nullable:true})
    _count?: ListingSettingCountAggregateInput;

    @Field(() => ListingSettingAvgAggregateInput, {nullable:true})
    _avg?: ListingSettingAvgAggregateInput;

    @Field(() => ListingSettingSumAggregateInput, {nullable:true})
    _sum?: ListingSettingSumAggregateInput;

    @Field(() => ListingSettingMinAggregateInput, {nullable:true})
    _min?: ListingSettingMinAggregateInput;

    @Field(() => ListingSettingMaxAggregateInput, {nullable:true})
    _max?: ListingSettingMaxAggregateInput;
}
