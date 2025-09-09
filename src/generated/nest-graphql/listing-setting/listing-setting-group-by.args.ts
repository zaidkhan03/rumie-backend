import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingWhereInput } from './listing-setting-where.input';
import { Type } from 'class-transformer';
import { ListingSettingOrderByWithAggregationInput } from './listing-setting-order-by-with-aggregation.input';
import { ListingSettingScalarFieldEnum } from './listing-setting-scalar-field.enum';
import { ListingSettingScalarWhereWithAggregatesInput } from './listing-setting-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ListingSettingCountAggregateInput } from './listing-setting-count-aggregate.input';
import { ListingSettingAvgAggregateInput } from './listing-setting-avg-aggregate.input';
import { ListingSettingSumAggregateInput } from './listing-setting-sum-aggregate.input';
import { ListingSettingMinAggregateInput } from './listing-setting-min-aggregate.input';
import { ListingSettingMaxAggregateInput } from './listing-setting-max-aggregate.input';

@ArgsType()
export class ListingSettingGroupByArgs {

    @Field(() => ListingSettingWhereInput, {nullable:true})
    @Type(() => ListingSettingWhereInput)
    where?: ListingSettingWhereInput;

    @Field(() => [ListingSettingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ListingSettingOrderByWithAggregationInput>;

    @Field(() => [ListingSettingScalarFieldEnum], {nullable:false})
    by!: Array<`${ListingSettingScalarFieldEnum}`>;

    @Field(() => ListingSettingScalarWhereWithAggregatesInput, {nullable:true})
    having?: ListingSettingScalarWhereWithAggregatesInput;

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
