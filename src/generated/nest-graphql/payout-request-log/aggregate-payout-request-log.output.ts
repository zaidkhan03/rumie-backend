import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PayoutRequestLogCountAggregate } from './payout-request-log-count-aggregate.output';
import { PayoutRequestLogMinAggregate } from './payout-request-log-min-aggregate.output';
import { PayoutRequestLogMaxAggregate } from './payout-request-log-max-aggregate.output';

@ObjectType()
export class AggregatePayoutRequestLog {

    @Field(() => PayoutRequestLogCountAggregate, {nullable:true})
    _count?: PayoutRequestLogCountAggregate;

    @Field(() => PayoutRequestLogMinAggregate, {nullable:true})
    _min?: PayoutRequestLogMinAggregate;

    @Field(() => PayoutRequestLogMaxAggregate, {nullable:true})
    _max?: PayoutRequestLogMaxAggregate;
}
