import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationPayloadObjectEqualityInput } from './offer-notification-payload-object-equality.input';
import { OfferNotificationPayloadWhereInput } from '../offer-notification-payload/offer-notification-payload-where.input';

@InputType()
export class OfferNotificationPayloadCompositeFilter {

    @Field(() => OfferNotificationPayloadObjectEqualityInput, {nullable:true})
    equals?: OfferNotificationPayloadObjectEqualityInput;

    @Field(() => OfferNotificationPayloadWhereInput, {nullable:true})
    is?: OfferNotificationPayloadWhereInput;

    @Field(() => OfferNotificationPayloadWhereInput, {nullable:true})
    isNot?: OfferNotificationPayloadWhereInput;
}
