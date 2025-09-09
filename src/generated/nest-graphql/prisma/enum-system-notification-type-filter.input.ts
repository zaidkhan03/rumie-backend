import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemNotificationType } from './system-notification-type.enum';
import { NestedEnumSystemNotificationTypeFilter } from './nested-enum-system-notification-type-filter.input';

@InputType()
export class EnumSystemNotificationTypeFilter {

    @Field(() => SystemNotificationType, {nullable:true})
    equals?: `${SystemNotificationType}`;

    @Field(() => [SystemNotificationType], {nullable:true})
    in?: Array<`${SystemNotificationType}`>;

    @Field(() => [SystemNotificationType], {nullable:true})
    notIn?: Array<`${SystemNotificationType}`>;

    @Field(() => NestedEnumSystemNotificationTypeFilter, {nullable:true})
    not?: NestedEnumSystemNotificationTypeFilter;
}
