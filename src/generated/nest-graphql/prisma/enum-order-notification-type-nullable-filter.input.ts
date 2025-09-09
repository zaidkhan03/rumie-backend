import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationType } from './order-notification-type.enum';
import { NestedEnumOrderNotificationTypeNullableFilter } from './nested-enum-order-notification-type-nullable-filter.input';

@InputType()
export class EnumOrderNotificationTypeNullableFilter {

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
