import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationPayloadsWhereInput } from './notification-payloads-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNotificationPayloadsArgs {

    @Field(() => NotificationPayloadsWhereInput, {nullable:true})
    @Type(() => NotificationPayloadsWhereInput)
    where?: NotificationPayloadsWhereInput;
}
