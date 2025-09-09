import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationPayloadsCreateManyInput } from './notification-payloads-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNotificationPayloadsArgs {

    @Field(() => [NotificationPayloadsCreateManyInput], {nullable:false})
    @Type(() => NotificationPayloadsCreateManyInput)
    data!: Array<NotificationPayloadsCreateManyInput>;
}
