import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppPopupCountAggregate } from './app-popup-count-aggregate.output';
import { AppPopupAvgAggregate } from './app-popup-avg-aggregate.output';
import { AppPopupSumAggregate } from './app-popup-sum-aggregate.output';
import { AppPopupMinAggregate } from './app-popup-min-aggregate.output';
import { AppPopupMaxAggregate } from './app-popup-max-aggregate.output';

@ObjectType()
export class AggregateAppPopup {

    @Field(() => AppPopupCountAggregate, {nullable:true})
    _count?: AppPopupCountAggregate;

    @Field(() => AppPopupAvgAggregate, {nullable:true})
    _avg?: AppPopupAvgAggregate;

    @Field(() => AppPopupSumAggregate, {nullable:true})
    _sum?: AppPopupSumAggregate;

    @Field(() => AppPopupMinAggregate, {nullable:true})
    _min?: AppPopupMinAggregate;

    @Field(() => AppPopupMaxAggregate, {nullable:true})
    _max?: AppPopupMaxAggregate;
}
