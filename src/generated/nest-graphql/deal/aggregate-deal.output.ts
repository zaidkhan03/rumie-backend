import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DealCountAggregate } from './deal-count-aggregate.output';
import { DealMinAggregate } from './deal-min-aggregate.output';
import { DealMaxAggregate } from './deal-max-aggregate.output';

@ObjectType()
export class AggregateDeal {

    @Field(() => DealCountAggregate, {nullable:true})
    _count?: DealCountAggregate;

    @Field(() => DealMinAggregate, {nullable:true})
    _min?: DealMinAggregate;

    @Field(() => DealMaxAggregate, {nullable:true})
    _max?: DealMaxAggregate;
}
