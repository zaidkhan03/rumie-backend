import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationType } from './offer-notification-type.enum';

@InputType()
export class OfferNotificationPayloadObjectEqualityInput {

    @Field(() => OfferNotificationType, {nullable:false})
    type!: `${OfferNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    otherParticipantFullName!: string;

    @Field(() => String, {nullable:false})
    otherParticipantUserId!: string;
}
