import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationType } from './offer-notification-type.enum';

@InputType()
export class NestedEnumOfferNotificationTypeFilter {

    @Field(() => OfferNotificationType, {nullable:true})
    equals?: `${OfferNotificationType}`;

    @Field(() => [OfferNotificationType], {nullable:true})
    in?: Array<`${OfferNotificationType}`>;

    @Field(() => [OfferNotificationType], {nullable:true})
    notIn?: Array<`${OfferNotificationType}`>;

    @Field(() => NestedEnumOfferNotificationTypeFilter, {nullable:true})
    not?: NestedEnumOfferNotificationTypeFilter;
}
