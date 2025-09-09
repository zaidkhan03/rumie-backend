import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRentalNotificationTypeFilter } from '../prisma/enum-rental-notification-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RentalNotificationPayloadWhereInput {

    @Field(() => [RentalNotificationPayloadWhereInput], {nullable:true})
    AND?: Array<RentalNotificationPayloadWhereInput>;

    @Field(() => [RentalNotificationPayloadWhereInput], {nullable:true})
    OR?: Array<RentalNotificationPayloadWhereInput>;

    @Field(() => [RentalNotificationPayloadWhereInput], {nullable:true})
    NOT?: Array<RentalNotificationPayloadWhereInput>;

    @Field(() => EnumRentalNotificationTypeFilter, {nullable:true})
    type?: EnumRentalNotificationTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    conversationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    listingTitle?: StringFilter;
}
