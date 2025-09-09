import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationPayloadsWhereUniqueInput } from './notification-payloads-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneNotificationPayloadsArgs {

    @Field(() => NotificationPayloadsWhereUniqueInput, {nullable:false})
    @Type(() => NotificationPayloadsWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationPayloadsWhereUniqueInput, 'id'>;
}
