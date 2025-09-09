import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderType } from '../prisma/order-type.enum';
import { OrderStatus } from '../prisma/order-status.enum';

@ObjectType()
export class OrderMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => OrderType, {nullable:true})
    type?: `${OrderType}`;

    @Field(() => String, {nullable:true})
    providerId?: string;

    @Field(() => String, {nullable:true})
    consumerId?: string;

    @Field(() => String, {nullable:true})
    conversationId?: string;

    @Field(() => String, {nullable:true})
    paymentId?: string;

    @Field(() => OrderStatus, {nullable:true})
    status?: `${OrderStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
