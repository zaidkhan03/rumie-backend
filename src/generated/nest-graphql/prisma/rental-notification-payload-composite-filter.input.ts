import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentalNotificationPayloadObjectEqualityInput } from './rental-notification-payload-object-equality.input';
import { RentalNotificationPayloadWhereInput } from '../rental-notification-payload/rental-notification-payload-where.input';

@InputType()
export class RentalNotificationPayloadCompositeFilter {

    @Field(() => RentalNotificationPayloadObjectEqualityInput, {nullable:true})
    equals?: RentalNotificationPayloadObjectEqualityInput;

    @Field(() => RentalNotificationPayloadWhereInput, {nullable:true})
    is?: RentalNotificationPayloadWhereInput;

    @Field(() => RentalNotificationPayloadWhereInput, {nullable:true})
    isNot?: RentalNotificationPayloadWhereInput;
}
