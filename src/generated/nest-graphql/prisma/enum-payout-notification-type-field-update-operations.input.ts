import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutNotificationType } from './payout-notification-type.enum';

@InputType()
export class EnumPayoutNotificationTypeFieldUpdateOperationsInput {

    @Field(() => PayoutNotificationType, {nullable:true})
    set?: `${PayoutNotificationType}`;
}
