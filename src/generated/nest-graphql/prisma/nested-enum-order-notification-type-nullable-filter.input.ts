import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationType } from './order-notification-type.enum';

@InputType()
export class NestedEnumOrderNotificationTypeNullableFilter {

    @Field(() => OrderNotificationType, {nullable:true})
    equals?: `${OrderNotificationType}`;

    @Field(() => [OrderNotificationType], {nullable:true})
    in?: Array<`${OrderNotificationType}`>;

    @Field(() => [OrderNotificationType], {nullable:true})
    notIn?: Array<`${OrderNotificationType}`>;

    @Field(() => NestedEnumOrderNotificationTypeNullableFilter, {nullable:true})
    not?: NestedEnumOrderNotificationTypeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
