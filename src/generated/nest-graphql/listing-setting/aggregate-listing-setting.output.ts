import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ListingSettingCountAggregate } from './listing-setting-count-aggregate.output';
import { ListingSettingAvgAggregate } from './listing-setting-avg-aggregate.output';
import { ListingSettingSumAggregate } from './listing-setting-sum-aggregate.output';
import { ListingSettingMinAggregate } from './listing-setting-min-aggregate.output';
import { ListingSettingMaxAggregate } from './listing-setting-max-aggregate.output';

@ObjectType()
export class AggregateListingSetting {

    @Field(() => ListingSettingCountAggregate, {nullable:true})
    _count?: ListingSettingCountAggregate;

    @Field(() => ListingSettingAvgAggregate, {nullable:true})
    _avg?: ListingSettingAvgAggregate;

    @Field(() => ListingSettingSumAggregate, {nullable:true})
    _sum?: ListingSettingSumAggregate;

    @Field(() => ListingSettingMinAggregate, {nullable:true})
    _min?: ListingSettingMinAggregate;

    @Field(() => ListingSettingMaxAggregate, {nullable:true})
    _max?: ListingSettingMaxAggregate;
}
