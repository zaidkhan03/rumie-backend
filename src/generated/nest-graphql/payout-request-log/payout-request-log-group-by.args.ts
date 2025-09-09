import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PayoutRequestLogWhereInput } from './payout-request-log-where.input';
import { Type } from 'class-transformer';
import { PayoutRequestLogOrderByWithAggregationInput } from './payout-request-log-order-by-with-aggregation.input';
import { PayoutRequestLogScalarFieldEnum } from './payout-request-log-scalar-field.enum';
import { PayoutRequestLogScalarWhereWithAggregatesInput } from './payout-request-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PayoutRequestLogCountAggregateInput } from './payout-request-log-count-aggregate.input';
import { PayoutRequestLogMinAggregateInput } from './payout-request-log-min-aggregate.input';
import { PayoutRequestLogMaxAggregateInput } from './payout-request-log-max-aggregate.input';

@ArgsType()
export class PayoutRequestLogGroupByArgs {

    @Field(() => PayoutRequestLogWhereInput, {nullable:true})
    @Type(() => PayoutRequestLogWhereInput)
    where?: PayoutRequestLogWhereInput;

    @Field(() => [PayoutRequestLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PayoutRequestLogOrderByWithAggregationInput>;

    @Field(() => [PayoutRequestLogScalarFieldEnum], {nullable:false})
    by!: Array<`${PayoutRequestLogScalarFieldEnum}`>;

    @Field(() => PayoutRequestLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: PayoutRequestLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PayoutRequestLogCountAggregateInput, {nullable:true})
    _count?: PayoutRequestLogCountAggregateInput;

    @Field(() => PayoutRequestLogMinAggregateInput, {nullable:true})
    _min?: PayoutRequestLogMinAggregateInput;

    @Field(() => PayoutRequestLogMaxAggregateInput, {nullable:true})
    _max?: PayoutRequestLogMaxAggregateInput;
}
