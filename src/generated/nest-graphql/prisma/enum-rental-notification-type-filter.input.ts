import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentalNotificationType } from './rental-notification-type.enum';
import { NestedEnumRentalNotificationTypeFilter } from './nested-enum-rental-notification-type-filter.input';

@InputType()
export class EnumRentalNotificationTypeFilter {

    @Field(() => RentalNotificationType, {nullable:true})
    equals?: `${RentalNotificationType}`;

    @Field(() => [RentalNotificationType], {nullable:true})
    in?: Array<`${RentalNotificationType}`>;

    @Field(() => [RentalNotificationType], {nullable:true})
    notIn?: Array<`${RentalNotificationType}`>;

    @Field(() => NestedEnumRentalNotificationTypeFilter, {nullable:true})
    not?: NestedEnumRentalNotificationTypeFilter;
}
