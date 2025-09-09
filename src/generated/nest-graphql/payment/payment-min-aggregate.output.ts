import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gateway } from '../prisma/gateway.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PaymentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Gateway, {nullable:true})
    gateway?: `${Gateway}`;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    methodDescription?: string;

    @Field(() => String, {nullable:true})
    stripePaymentId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
