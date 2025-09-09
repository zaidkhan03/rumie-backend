import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogWhereInput } from './order-payout-request-log-where.input';
import { Type } from 'class-transformer';
import { OrderPayoutRequestLogOrderByWithRelationInput } from './order-payout-request-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderPayoutRequestLogWhereUniqueInput } from './order-payout-request-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderPayoutRequestLogCountAggregateInput } from './order-payout-request-log-count-aggregate.input';
import { OrderPayoutRequestLogMinAggregateInput } from './order-payout-request-log-min-aggregate.input';
import { OrderPayoutRequestLogMaxAggregateInput } from './order-payout-request-log-max-aggregate.input';

@ArgsType()
export class OrderPayoutRequestLogAggregateArgs {

    @Field(() => OrderPayoutRequestLogWhereInput, {nullable:true})
    @Type(() => OrderPayoutRequestLogWhereInput)
    where?: OrderPayoutRequestLogWhereInput;

    @Field(() => [OrderPayoutRequestLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderPayoutRequestLogOrderByWithRelationInput>;

    @Field(() => OrderPayoutRequestLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderPayoutRequestLogWhereUniqueInput, 'id'>;

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
