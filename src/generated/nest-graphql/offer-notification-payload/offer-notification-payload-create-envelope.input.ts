import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationPayloadCreateInput } from './offer-notification-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class OfferNotificationPayloadCreateEnvelopeInput {

    @Field(() => OfferNotificationPayloadCreateInput, {nullable:true})
    @Type(() => OfferNotificationPayloadCreateInput)
    set?: OfferNotificationPayloadCreateInput;
}
