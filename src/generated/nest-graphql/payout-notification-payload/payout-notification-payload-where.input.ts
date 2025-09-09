import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumPayoutNotificationTypeFilter } from '../prisma/enum-payout-notification-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PayoutNotificationPayloadWhereInput {

    @Field(() => [PayoutNotificationPayloadWhereInput], {nullable:true})
    AND?: Array<PayoutNotificationPayloadWhereInput>;

    @Field(() => [PayoutNotificationPayloadWhereInput], {nullable:true})
    OR?: Array<PayoutNotificationPayloadWhereInput>;

    @Field(() => [PayoutNotificationPayloadWhereInput], {nullable:true})
    NOT?: Array<PayoutNotificationPayloadWhereInput>;

    @Field(() => EnumPayoutNotificationTypeFilter, {nullable:true})
    type?: EnumPayoutNotificationTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    conversationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    payoutID?: StringFilter;
}
