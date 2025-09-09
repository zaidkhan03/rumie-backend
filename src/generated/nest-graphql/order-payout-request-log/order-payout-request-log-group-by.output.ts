import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderPayoutRequestLogCountAggregate } from './order-payout-request-log-count-aggregate.output';
import { OrderPayoutRequestLogMinAggregate } from './order-payout-request-log-min-aggregate.output';
import { OrderPayoutRequestLogMaxAggregate } from './order-payout-request-log-max-aggregate.output';

@ObjectType()
export class OrderPayoutRequestLogGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Boolean, {nullable:false})
    valid!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OrderPayoutRequestLogCountAggregate, {nullable:true})
    _count?: OrderPayoutRequestLogCountAggregate;

    @Field(() => OrderPayoutRequestLogMinAggregate, {nullable:true})
    _min?: OrderPayoutRequestLogMinAggregate;

    @Field(() => OrderPayoutRequestLogMaxAggregate, {nullable:true})
    _max?: OrderPayoutRequestLogMaxAggregate;
}
