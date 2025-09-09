import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationType } from './order-notification-type.enum';
import { NestedEnumOrderNotificationTypeFilter } from './nested-enum-order-notification-type-filter.input';

@InputType()
export class EnumOrderNotificationTypeFilter {

    @Field(() => OrderNotificationType, {nullable:true})
    equals?: `${OrderNotificationType}`;

    @Field(() => [OrderNotificationType], {nullable:true})
    in?: Array<`${OrderNotificationType}`>;

    @Field(() => [OrderNotificationType], {nullable:true})
    notIn?: Array<`${OrderNotificationType}`>;

    @Field(() => NestedEnumOrderNotificationTypeFilter, {nullable:true})
    not?: NestedEnumOrderNotificationTypeFilter;
}
