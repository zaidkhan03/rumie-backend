import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShoppingPreferenceCountAggregate } from './shopping-preference-count-aggregate.output';
import { ShoppingPreferenceMinAggregate } from './shopping-preference-min-aggregate.output';
import { ShoppingPreferenceMaxAggregate } from './shopping-preference-max-aggregate.output';

@ObjectType()
export class AggregateShoppingPreference {

    @Field(() => ShoppingPreferenceCountAggregate, {nullable:true})
    _count?: ShoppingPreferenceCountAggregate;

    @Field(() => ShoppingPreferenceMinAggregate, {nullable:true})
    _min?: ShoppingPreferenceMinAggregate;

    @Field(() => ShoppingPreferenceMaxAggregate, {nullable:true})
    _max?: ShoppingPreferenceMaxAggregate;
}
