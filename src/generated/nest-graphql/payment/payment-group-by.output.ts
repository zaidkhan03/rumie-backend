import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gateway } from '../prisma/gateway.enum';
import { Float } from '@nestjs/graphql';
import { PaymentCountAggregate } from './payment-count-aggregate.output';
import { PaymentAvgAggregate } from './payment-avg-aggregate.output';
import { PaymentSumAggregate } from './payment-sum-aggregate.output';
import { PaymentMinAggregate } from './payment-min-aggregate.output';
import { PaymentMaxAggregate } from './payment-max-aggregate.output';

@ObjectType()
export class PaymentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Gateway, {nullable:false})
    gateway!: `${Gateway}`;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    methodDescription!: string;

    @Field(() => String, {nullable:false})
    stripePaymentId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PaymentCountAggregate, {nullable:true})
    _count?: PaymentCountAggregate;

    @Field(() => PaymentAvgAggregate, {nullable:true})
    _avg?: PaymentAvgAggregate;

    @Field(() => PaymentSumAggregate, {nullable:true})
    _sum?: PaymentSumAggregate;

    @Field(() => PaymentMinAggregate, {nullable:true})
    _min?: PaymentMinAggregate;

    @Field(() => PaymentMaxAggregate, {nullable:true})
    _max?: PaymentMaxAggregate;
}
