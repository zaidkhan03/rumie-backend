import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PromoCodeType } from '../prisma/promo-code-type.enum';
import { Int } from '@nestjs/graphql';
import { PromoCodeCountAggregate } from './promo-code-count-aggregate.output';
import { PromoCodeAvgAggregate } from './promo-code-avg-aggregate.output';
import { PromoCodeSumAggregate } from './promo-code-sum-aggregate.output';
import { PromoCodeMinAggregate } from './promo-code-min-aggregate.output';
import { PromoCodeMaxAggregate } from './promo-code-max-aggregate.output';

@ObjectType()
export class PromoCodeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => PromoCodeType, {nullable:false})
    type!: `${PromoCodeType}`;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => Int, {nullable:false})
    usageLimit!: number;

    @Field(() => Int, {nullable:true})
    useCount?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PromoCodeCountAggregate, {nullable:true})
    _count?: PromoCodeCountAggregate;

    @Field(() => PromoCodeAvgAggregate, {nullable:true})
    _avg?: PromoCodeAvgAggregate;

    @Field(() => PromoCodeSumAggregate, {nullable:true})
    _sum?: PromoCodeSumAggregate;

    @Field(() => PromoCodeMinAggregate, {nullable:true})
    _min?: PromoCodeMinAggregate;

    @Field(() => PromoCodeMaxAggregate, {nullable:true})
    _max?: PromoCodeMaxAggregate;
}
