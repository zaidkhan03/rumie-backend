import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationDataObjectEqualityInput } from './push-notification-data-object-equality.input';
import { PushNotificationDataWhereInput } from '../push-notification-data/push-notification-data-where.input';

@InputType()
export class PushNotificationDataCompositeFilter {

    @Field(() => PushNotificationDataObjectEqualityInput, {nullable:true})
    equals?: PushNotificationDataObjectEqualityInput;

    @Field(() => PushNotificationDataWhereInput, {nullable:true})
    is?: PushNotificationDataWhereInput;

    @Field(() => PushNotificationDataWhereInput, {nullable:true})
    isNot?: PushNotificationDataWhereInput;
}
