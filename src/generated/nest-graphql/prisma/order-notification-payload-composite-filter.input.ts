import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationPayloadObjectEqualityInput } from './order-notification-payload-object-equality.input';
import { OrderNotificationPayloadWhereInput } from '../order-notification-payload/order-notification-payload-where.input';

@InputType()
export class OrderNotificationPayloadCompositeFilter {

    @Field(() => OrderNotificationPayloadObjectEqualityInput, {nullable:true})
    equals?: OrderNotificationPayloadObjectEqualityInput;

    @Field(() => OrderNotificationPayloadWhereInput, {nullable:true})
    is?: OrderNotificationPayloadWhereInput;

    @Field(() => OrderNotificationPayloadWhereInput, {nullable:true})
    isNot?: OrderNotificationPayloadWhereInput;
}
