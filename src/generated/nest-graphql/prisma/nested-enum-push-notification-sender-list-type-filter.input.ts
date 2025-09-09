import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationSenderListType } from './push-notification-sender-list-type.enum';

@InputType()
export class NestedEnumPushNotificationSenderListTypeFilter {

    @Field(() => PushNotificationSenderListType, {nullable:true})
    equals?: `${PushNotificationSenderListType}`;

    @Field(() => [PushNotificationSenderListType], {nullable:true})
    in?: Array<`${PushNotificationSenderListType}`>;

    @Field(() => [PushNotificationSenderListType], {nullable:true})
    notIn?: Array<`${PushNotificationSenderListType}`>;

    @Field(() => NestedEnumPushNotificationSenderListTypeFilter, {nullable:true})
    not?: NestedEnumPushNotificationSenderListTypeFilter;
}
