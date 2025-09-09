import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationDataCreateInput } from './push-notification-data-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PushNotificationDataCreateEnvelopeInput {

    @Field(() => PushNotificationDataCreateInput, {nullable:true})
    @Type(() => PushNotificationDataCreateInput)
    set?: PushNotificationDataCreateInput;
}
