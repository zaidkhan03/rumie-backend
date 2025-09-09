import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppLovinCountAggregate } from './app-lovin-count-aggregate.output';
import { AppLovinMinAggregate } from './app-lovin-min-aggregate.output';
import { AppLovinMaxAggregate } from './app-lovin-max-aggregate.output';

@ObjectType()
export class AggregateAppLovin {

    @Field(() => AppLovinCountAggregate, {nullable:true})
    _count?: AppLovinCountAggregate;

    @Field(() => AppLovinMinAggregate, {nullable:true})
    _min?: AppLovinMinAggregate;

    @Field(() => AppLovinMaxAggregate, {nullable:true})
    _max?: AppLovinMaxAggregate;
}
