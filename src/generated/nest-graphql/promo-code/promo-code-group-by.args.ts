import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromoCodeWhereInput } from './promo-code-where.input';
import { Type } from 'class-transformer';
import { PromoCodeOrderByWithAggregationInput } from './promo-code-order-by-with-aggregation.input';
import { PromoCodeScalarFieldEnum } from './promo-code-scalar-field.enum';
import { PromoCodeScalarWhereWithAggregatesInput } from './promo-code-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PromoCodeCountAggregateInput } from './promo-code-count-aggregate.input';
import { PromoCodeAvgAggregateInput } from './promo-code-avg-aggregate.input';
import { PromoCodeSumAggregateInput } from './promo-code-sum-aggregate.input';
import { PromoCodeMinAggregateInput } from './promo-code-min-aggregate.input';
import { PromoCodeMaxAggregateInput } from './promo-code-max-aggregate.input';

@ArgsType()
export class PromoCodeGroupByArgs {

    @Field(() => PromoCodeWhereInput, {nullable:true})
    @Type(() => PromoCodeWhereInput)
    where?: PromoCodeWhereInput;

    @Field(() => [PromoCodeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PromoCodeOrderByWithAggregationInput>;

    @Field(() => [PromoCodeScalarFieldEnum], {nullable:false})
    by!: Array<`${PromoCodeScalarFieldEnum}`>;

    @Field(() => PromoCodeScalarWhereWithAggregatesInput, {nullable:true})
    having?: PromoCodeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PromoCodeCountAggregateInput, {nullable:true})
    _count?: PromoCodeCountAggregateInput;

    @Field(() => PromoCodeAvgAggregateInput, {nullable:true})
    _avg?: PromoCodeAvgAggregateInput;

    @Field(() => PromoCodeSumAggregateInput, {nullable:true})
    _sum?: PromoCodeSumAggregateInput;

    @Field(() => PromoCodeMinAggregateInput, {nullable:true})
    _min?: PromoCodeMinAggregateInput;

    @Field(() => PromoCodeMaxAggregateInput, {nullable:true})
    _max?: PromoCodeMaxAggregateInput;
}
