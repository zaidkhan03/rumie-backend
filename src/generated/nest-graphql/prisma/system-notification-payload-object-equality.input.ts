import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemNotificationType } from './system-notification-type.enum';

@InputType()
export class SystemNotificationPayloadObjectEqualityInput {

    @Field(() => SystemNotificationType, {nullable:false})
    type!: `${SystemNotificationType}`;

    @Field(() => String, {nullable:true})
    conversationId?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => String, {nullable:true})
    payoutID?: string;

    @Field(() => String, {nullable:true})
    userID?: string;
}
