import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemNotificationPayloadCreateInput } from './system-notification-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class SystemNotificationPayloadCreateEnvelopeInput {

    @Field(() => SystemNotificationPayloadCreateInput, {nullable:true})
    @Type(() => SystemNotificationPayloadCreateInput)
    set?: SystemNotificationPayloadCreateInput;
}
