import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DMMessageTypeCountAggregate } from './dm-message-type-count-aggregate.output';
import { DMMessageTypeMinAggregate } from './dm-message-type-min-aggregate.output';
import { DMMessageTypeMaxAggregate } from './dm-message-type-max-aggregate.output';

@ObjectType()
export class AggregateDMMessageType {

    @Field(() => DMMessageTypeCountAggregate, {nullable:true})
    _count?: DMMessageTypeCountAggregate;

    @Field(() => DMMessageTypeMinAggregate, {nullable:true})
    _min?: DMMessageTypeMinAggregate;

    @Field(() => DMMessageTypeMaxAggregate, {nullable:true})
    _max?: DMMessageTypeMaxAggregate;
}
