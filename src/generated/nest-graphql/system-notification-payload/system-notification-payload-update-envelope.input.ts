import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemNotificationPayloadCreateInput } from './system-notification-payload-create.input';
import { Type } from 'class-transformer';
import { SystemNotificationPayloadUpdateInput } from './system-notification-payload-update.input';

@InputType()
export class SystemNotificationPayloadUpdateEnvelopeInput {

    @Field(() => SystemNotificationPayloadCreateInput, {nullable:true})
    @Type(() => SystemNotificationPayloadCreateInput)
    set?: SystemNotificationPayloadCreateInput;

    @Field(() => SystemNotificationPayloadUpdateInput, {nullable:true})
    @Type(() => SystemNotificationPayloadUpdateInput)
    update?: SystemNotificationPayloadUpdateInput;
}
