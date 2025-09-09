import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OfferNotificationType } from '../prisma/offer-notification-type.enum';

@ObjectType()
export class OfferNotificationPayload {

    @Field(() => OfferNotificationType, {nullable:false})
    type!: `${OfferNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    otherParticipantFullName!: string;

    @Field(() => String, {nullable:false})
    otherParticipantUserId!: string;
}
