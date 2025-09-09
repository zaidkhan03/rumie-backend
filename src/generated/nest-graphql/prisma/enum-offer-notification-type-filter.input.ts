import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationType } from './offer-notification-type.enum';
import { NestedEnumOfferNotificationTypeFilter } from './nested-enum-offer-notification-type-filter.input';

@InputType()
export class EnumOfferNotificationTypeFilter {

    @Field(() => OfferNotificationType, {nullable:true})
    equals?: `${OfferNotificationType}`;

    @Field(() => [OfferNotificationType], {nullable:true})
    in?: Array<`${OfferNotificationType}`>;

    @Field(() => [OfferNotificationType], {nullable:true})
    notIn?: Array<`${OfferNotificationType}`>;

    @Field(() => NestedEnumOfferNotificationTypeFilter, {nullable:true})
    not?: NestedEnumOfferNotificationTypeFilter;
}
