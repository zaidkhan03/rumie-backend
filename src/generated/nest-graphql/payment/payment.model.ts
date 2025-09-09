import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gateway } from '../prisma/gateway.enum';
import { Float } from '@nestjs/graphql';
import { Order } from '../order/order.model';

@ObjectType()
export class Payment {

    @Field(() => ID, {nullable:false})
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
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Order, {nullable:true})
    order?: Order | null;
}
