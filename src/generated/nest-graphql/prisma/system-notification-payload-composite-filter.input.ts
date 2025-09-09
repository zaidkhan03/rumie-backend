import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemNotificationPayloadObjectEqualityInput } from './system-notification-payload-object-equality.input';
import { SystemNotificationPayloadWhereInput } from '../system-notification-payload/system-notification-payload-where.input';

@InputType()
export class SystemNotificationPayloadCompositeFilter {

    @Field(() => SystemNotificationPayloadObjectEqualityInput, {nullable:true})
    equals?: SystemNotificationPayloadObjectEqualityInput;

    @Field(() => SystemNotificationPayloadWhereInput, {nullable:true})
    is?: SystemNotificationPayloadWhereInput;

    @Field(() => SystemNotificationPayloadWhereInput, {nullable:true})
    isNot?: SystemNotificationPayloadWhereInput;
}
