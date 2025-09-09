import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemNotificationType } from './system-notification-type.enum';

@InputType()
export class EnumSystemNotificationTypeFieldUpdateOperationsInput {

    @Field(() => SystemNotificationType, {nullable:true})
    set?: `${SystemNotificationType}`;
}
