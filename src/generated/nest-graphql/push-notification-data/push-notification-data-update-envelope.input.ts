import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationDataCreateInput } from './push-notification-data-create.input';
import { Type } from 'class-transformer';
import { PushNotificationDataUpdateInput } from './push-notification-data-update.input';

@InputType()
export class PushNotificationDataUpdateEnvelopeInput {

    @Field(() => PushNotificationDataCreateInput, {nullable:true})
    @Type(() => PushNotificationDataCreateInput)
    set?: PushNotificationDataCreateInput;

    @Field(() => PushNotificationDataUpdateInput, {nullable:true})
    @Type(() => PushNotificationDataUpdateInput)
    update?: PushNotificationDataUpdateInput;
}
