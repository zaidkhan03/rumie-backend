import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ListingSettingCountAggregate } from './listing-setting-count-aggregate.output';
import { ListingSettingAvgAggregate } from './listing-setting-avg-aggregate.output';
import { ListingSettingSumAggregate } from './listing-setting-sum-aggregate.output';
import { ListingSettingMinAggregate } from './listing-setting-min-aggregate.output';
import { ListingSettingMaxAggregate } from './listing-setting-max-aggregate.output';

@ObjectType()
export class ListingSettingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    enableSelling!: boolean;

    @Field(() => Boolean, {nullable:false})
    enableRenting!: boolean;

    @Field(() => [String], {nullable:true})
    reasonsForSelling?: Array<string>;

    @Field(() => [String], {nullable:true})
    meetupPreferences?: Array<string>;

    @Field(() => [String], {nullable:true})
    productDeliveryModes?: Array<string>;

    @Field(() => Int, {nullable:false})
    sellerFees!: number;

    @Field(() => Int, {nullable:false})
    taxes!: number;

    @Field(() => Int, {nullable:false})
    creditProcessing!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
