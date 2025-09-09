import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationPayloadCreateInput } from './order-notification-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderNotificationPayloadCreateEnvelopeInput {

    @Field(() => OrderNotificationPayloadCreateInput, {nullable:true})
    @Type(() => OrderNotificationPayloadCreateInput)
    set?: OrderNotificationPayloadCreateInput;
}
