import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdvertiserWhereInput } from './advertiser-where.input';
import { Type } from 'class-transformer';
import { AdvertiserOrderByWithAggregationInput } from './advertiser-order-by-with-aggregation.input';
import { AdvertiserScalarFieldEnum } from './advertiser-scalar-field.enum';
import { AdvertiserScalarWhereWithAggregatesInput } from './advertiser-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdvertiserCountAggregateInput } from './advertiser-count-aggregate.input';
import { AdvertiserMinAggregateInput } from './advertiser-min-aggregate.input';
import { AdvertiserMaxAggregateInput } from './advertiser-max-aggregate.input';

@ArgsType()
export class AdvertiserGroupByArgs {

    @Field(() => AdvertiserWhereInput, {nullable:true})
    @Type(() => AdvertiserWhereInput)
    where?: AdvertiserWhereInput;

    @Field(() => [AdvertiserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdvertiserOrderByWithAggregationInput>;

    @Field(() => [AdvertiserScalarFieldEnum], {nullable:false})
    by!: Array<`${AdvertiserScalarFieldEnum}`>;

    @Field(() => AdvertiserScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdvertiserScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdvertiserCountAggregateInput, {nullable:true})
    _count?: AdvertiserCountAggregateInput;

    @Field(() => AdvertiserMinAggregateInput, {nullable:true})
    _min?: AdvertiserMinAggregateInput;

    @Field(() => AdvertiserMaxAggregateInput, {nullable:true})
    _max?: AdvertiserMaxAggregateInput;
}
