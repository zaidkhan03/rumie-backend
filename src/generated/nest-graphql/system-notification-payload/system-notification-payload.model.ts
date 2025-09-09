import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SystemNotificationType } from '../prisma/system-notification-type.enum';

@ObjectType()
export class SystemNotificationPayload {

    @Field(() => SystemNotificationType, {nullable:false})
    type!: `${SystemNotificationType}`;

    @Field(() => String, {nullable:true})
    conversationId!: string | null;

    @Field(() => String, {nullable:true})
    orderId!: string | null;

    @Field(() => String, {nullable:true})
    payoutID!: string | null;

    @Field(() => String, {nullable:true})
    userID!: string | null;
}
