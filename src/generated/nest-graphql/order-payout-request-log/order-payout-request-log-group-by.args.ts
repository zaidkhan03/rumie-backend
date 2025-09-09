import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogWhereInput } from './order-payout-request-log-where.input';
import { Type } from 'class-transformer';
import { OrderPayoutRequestLogOrderByWithAggregationInput } from './order-payout-request-log-order-by-with-aggregation.input';
import { OrderPayoutRequestLogScalarFieldEnum } from './order-payout-request-log-scalar-field.enum';
import { OrderPayoutRequestLogScalarWhereWithAggregatesInput } from './order-payout-request-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderPayoutRequestLogCountAggregateInput } from './order-payout-request-log-count-aggregate.input';
import { OrderPayoutRequestLogMinAggregateInput } from './order-payout-request-log-min-aggregate.input';
import { OrderPayoutRequestLogMaxAggregateInput } from './order-payout-request-log-max-aggregate.input';

@ArgsType()
export class OrderPayoutRequestLogGroupByArgs {

    @Field(() => OrderPayoutRequestLogWhereInput, {nullable:true})
    @Type(() => OrderPayoutRequestLogWhereInput)
    where?: OrderPayoutRequestLogWhereInput;

    @Field(() => [OrderPayoutRequestLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderPayoutRequestLogOrderByWithAggregationInput>;

    @Field(() => [OrderPayoutRequestLogScalarFieldEnum], {nullable:false})
    by!: Array<`${OrderPayoutRequestLogScalarFieldEnum}`>;

    @Field(() => OrderPayoutRequestLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderPayoutRequestLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderPayoutRequestLogCountAggregateInput, {nullable:true})
    _count?: OrderPayoutRequestLogCountAggregateInput;

    @Field(() => OrderPayoutRequestLogMinAggregateInput, {nullable:true})
    _min?: OrderPayoutRequestLogMinAggregateInput;

    @Field(() => OrderPayoutRequestLogMaxAggregateInput, {nullable:true})
    _max?: OrderPayoutRequestLogMaxAggregateInput;
}
