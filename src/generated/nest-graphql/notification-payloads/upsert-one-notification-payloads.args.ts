import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationPayloadsWhereUniqueInput } from './notification-payloads-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationPayloadsCreateInput } from './notification-payloads-create.input';
import { NotificationPayloadsUpdateInput } from './notification-payloads-update.input';

@ArgsType()
export class UpsertOneNotificationPayloadsArgs {

    @Field(() => NotificationPayloadsWhereUniqueInput, {nullable:false})
    @Type(() => NotificationPayloadsWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationPayloadsWhereUniqueInput, 'id'>;

    @Field(() => NotificationPayloadsCreateInput, {nullable:false})
    @Type(() => NotificationPayloadsCreateInput)
    create!: NotificationPayloadsCreateInput;

    @Field(() => NotificationPayloadsUpdateInput, {nullable:false})
    @Type(() => NotificationPayloadsUpdateInput)
    update!: NotificationPayloadsUpdateInput;
}
