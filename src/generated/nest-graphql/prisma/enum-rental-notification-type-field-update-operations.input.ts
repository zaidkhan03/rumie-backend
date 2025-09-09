import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentalNotificationType } from './rental-notification-type.enum';

@InputType()
export class EnumRentalNotificationTypeFieldUpdateOperationsInput {

    @Field(() => RentalNotificationType, {nullable:true})
    set?: `${RentalNotificationType}`;
}
