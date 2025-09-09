import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationPayloadsCreateInput } from './notification-payloads-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNotificationPayloadsArgs {

    @Field(() => NotificationPayloadsCreateInput, {nullable:false})
    @Type(() => NotificationPayloadsCreateInput)
    data!: NotificationPayloadsCreateInput;
}
