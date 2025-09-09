import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HobbyCountAggregate } from './hobby-count-aggregate.output';
import { HobbyMinAggregate } from './hobby-min-aggregate.output';
import { HobbyMaxAggregate } from './hobby-max-aggregate.output';

@ObjectType()
export class AggregateHobby {

    @Field(() => HobbyCountAggregate, {nullable:true})
    _count?: HobbyCountAggregate;

    @Field(() => HobbyMinAggregate, {nullable:true})
    _min?: HobbyMinAggregate;

    @Field(() => HobbyMaxAggregate, {nullable:true})
    _max?: HobbyMaxAggregate;
}
