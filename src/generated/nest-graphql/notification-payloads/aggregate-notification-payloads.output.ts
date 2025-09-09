import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationPayloadsCountAggregate } from './notification-payloads-count-aggregate.output';
import { NotificationPayloadsMinAggregate } from './notification-payloads-min-aggregate.output';
import { NotificationPayloadsMaxAggregate } from './notification-payloads-max-aggregate.output';

@ObjectType()
export class AggregateNotificationPayloads {

    @Field(() => NotificationPayloadsCountAggregate, {nullable:true})
    _count?: NotificationPayloadsCountAggregate;

    @Field(() => NotificationPayloadsMinAggregate, {nullable:true})
    _min?: NotificationPayloadsMinAggregate;

    @Field(() => NotificationPayloadsMaxAggregate, {nullable:true})
    _max?: NotificationPayloadsMaxAggregate;
}
