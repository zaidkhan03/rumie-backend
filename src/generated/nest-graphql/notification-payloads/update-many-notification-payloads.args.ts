import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationPayloadsUpdateManyMutationInput } from './notification-payloads-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NotificationPayloadsWhereInput } from './notification-payloads-where.input';

@ArgsType()
export class UpdateManyNotificationPayloadsArgs {

    @Field(() => NotificationPayloadsUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationPayloadsUpdateManyMutationInput)
    data!: NotificationPayloadsUpdateManyMutationInput;

    @Field(() => NotificationPayloadsWhereInput, {nullable:true})
    @Type(() => NotificationPayloadsWhereInput)
    where?: NotificationPayloadsWhereInput;
}
