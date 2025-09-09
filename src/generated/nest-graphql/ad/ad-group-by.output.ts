import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdType } from '../prisma/ad-type.enum';
import { AdVisibility } from '../prisma/ad-visibility.enum';
import { Int } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { AdCountAggregate } from './ad-count-aggregate.output';
import { AdAvgAggregate } from './ad-avg-aggregate.output';
import { AdSumAggregate } from './ad-sum-aggregate.output';
import { AdMinAggregate } from './ad-min-aggregate.output';
import { AdMaxAggregate } from './ad-max-aggregate.output';

@ObjectType()
export class AdGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => AdType, {nullable:false})
    type!: `${AdType}`;

    @Field(() => [AdVisibility], {nullable:true})
    visibility?: Array<`${AdVisibility}`>;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    advertiserName?: string;

    @Field(() => String, {nullable:false})
    advertiserId!: string;

    @Field(() => Int, {nullable:true})
    monthlyBudget?: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => [Gender], {nullable:true})
    targetGenders?: Array<`${Gender}`>;

    @Field(() => AdCountAggregate, {nullable:true})
    _count?: AdCountAggregate;

    @Field(() => AdAvgAggregate, {nullable:true})
    _avg?: AdAvgAggregate;

    @Field(() => AdSumAggregate, {nullable:true})
    _sum?: AdSumAggregate;

    @Field(() => AdMinAggregate, {nullable:true})
    _min?: AdMinAggregate;

    @Field(() => AdMaxAggregate, {nullable:true})
    _max?: AdMaxAggregate;
}
