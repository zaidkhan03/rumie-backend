import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationType } from './offer-notification-type.enum';

@InputType()
export class EnumOfferNotificationTypeFieldUpdateOperationsInput {

    @Field(() => OfferNotificationType, {nullable:true})
    set?: `${OfferNotificationType}`;
}
