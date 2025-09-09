import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationPayloadCreateInput } from './order-notification-payload-create.input';
import { Type } from 'class-transformer';
import { OrderNotificationPayloadUpdateInput } from './order-notification-payload-update.input';

@InputType()
export class OrderNotificationPayloadUpdateEnvelopeInput {

    @Field(() => OrderNotificationPayloadCreateInput, {nullable:true})
    @Type(() => OrderNotificationPayloadCreateInput)
    set?: OrderNotificationPayloadCreateInput;

    @Field(() => OrderNotificationPayloadUpdateInput, {nullable:true})
    @Type(() => OrderNotificationPayloadUpdateInput)
    update?: OrderNotificationPayloadUpdateInput;
}
