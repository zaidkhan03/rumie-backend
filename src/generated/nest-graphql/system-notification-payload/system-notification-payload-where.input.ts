import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemNotificationTypeFilter } from '../prisma/enum-system-notification-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class SystemNotificationPayloadWhereInput {

    @Field(() => [SystemNotificationPayloadWhereInput], {nullable:true})
    AND?: Array<SystemNotificationPayloadWhereInput>;

    @Field(() => [SystemNotificationPayloadWhereInput], {nullable:true})
    OR?: Array<SystemNotificationPayloadWhereInput>;

    @Field(() => [SystemNotificationPayloadWhereInput], {nullable:true})
    NOT?: Array<SystemNotificationPayloadWhereInput>;

    @Field(() => EnumSystemNotificationTypeFilter, {nullable:true})
    type?: EnumSystemNotificationTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    conversationId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    payoutID?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userID?: StringNullableFilter;
}
