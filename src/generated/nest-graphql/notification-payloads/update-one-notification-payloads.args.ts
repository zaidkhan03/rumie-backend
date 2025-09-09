import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationPayloadsUpdateInput } from './notification-payloads-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NotificationPayloadsWhereUniqueInput } from './notification-payloads-where-unique.input';

@ArgsType()
export class UpdateOneNotificationPayloadsArgs {

    @Field(() => NotificationPayloadsUpdateInput, {nullable:false})
    @Type(() => NotificationPayloadsUpdateInput)
    data!: NotificationPayloadsUpdateInput;

    @Field(() => NotificationPayloadsWhereUniqueInput, {nullable:false})
    @Type(() => NotificationPayloadsWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationPayloadsWhereUniqueInput, 'id'>;
}
