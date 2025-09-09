import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOfferNotificationTypeFilter } from '../prisma/enum-offer-notification-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class OfferNotificationPayloadWhereInput {

    @Field(() => [OfferNotificationPayloadWhereInput], {nullable:true})
    AND?: Array<OfferNotificationPayloadWhereInput>;

    @Field(() => [OfferNotificationPayloadWhereInput], {nullable:true})
    OR?: Array<OfferNotificationPayloadWhereInput>;

    @Field(() => [OfferNotificationPayloadWhereInput], {nullable:true})
    NOT?: Array<OfferNotificationPayloadWhereInput>;

    @Field(() => EnumOfferNotificationTypeFilter, {nullable:true})
    type?: EnumOfferNotificationTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    conversationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    otherParticipantFullName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    otherParticipantUserId?: StringFilter;
}
