import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationType } from './order-notification-type.enum';

@InputType()
export class NullableEnumOrderNotificationTypeFieldUpdateOperationsInput {

    @Field(() => OrderNotificationType, {nullable:true})
    set?: `${OrderNotificationType}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
