import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationType } from './order-notification-type.enum';

@InputType()
export class EnumOrderNotificationTypeFieldUpdateOperationsInput {

    @Field(() => OrderNotificationType, {nullable:true})
    set?: `${OrderNotificationType}`;
}
