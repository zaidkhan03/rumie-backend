import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationSenderListType } from './push-notification-sender-list-type.enum';

@InputType()
export class EnumPushNotificationSenderListTypeFieldUpdateOperationsInput {

    @Field(() => PushNotificationSenderListType, {nullable:true})
    set?: `${PushNotificationSenderListType}`;
}
