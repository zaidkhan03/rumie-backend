import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationPayloadCreateInput } from './offer-notification-payload-create.input';
import { Type } from 'class-transformer';
import { OfferNotificationPayloadUpdateInput } from './offer-notification-payload-update.input';

@InputType()
export class OfferNotificationPayloadUpdateEnvelopeInput {

    @Field(() => OfferNotificationPayloadCreateInput, {nullable:true})
    @Type(() => OfferNotificationPayloadCreateInput)
    set?: OfferNotificationPayloadCreateInput;

    @Field(() => OfferNotificationPayloadUpdateInput, {nullable:true})
    @Type(() => OfferNotificationPayloadUpdateInput)
    update?: OfferNotificationPayloadUpdateInput;
}
