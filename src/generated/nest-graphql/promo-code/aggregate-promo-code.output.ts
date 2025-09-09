import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PromoCodeCountAggregate } from './promo-code-count-aggregate.output';
import { PromoCodeAvgAggregate } from './promo-code-avg-aggregate.output';
import { PromoCodeSumAggregate } from './promo-code-sum-aggregate.output';
import { PromoCodeMinAggregate } from './promo-code-min-aggregate.output';
import { PromoCodeMaxAggregate } from './promo-code-max-aggregate.output';

@ObjectType()
export class AggregatePromoCode {

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
