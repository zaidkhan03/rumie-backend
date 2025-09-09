import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationPayloadsWhereInput } from './notification-payloads-where.input';
import { Type } from 'class-transformer';
import { NotificationPayloadsOrderByWithRelationInput } from './notification-payloads-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NotificationPayloadsWhereUniqueInput } from './notification-payloads-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationPayloadsScalarFieldEnum } from './notification-payloads-scalar-field.enum';

@ArgsType()
export class FindFirstNotificationPayloadsArgs {

    @Field(() => NotificationPayloadsWhereInput, {nullable:true})
    @Type(() => NotificationPayloadsWhereInput)
    where?: NotificationPayloadsWhereInput;

    @Field(() => [NotificationPayloadsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationPayloadsOrderByWithRelationInput>;

    @Field(() => NotificationPayloadsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NotificationPayloadsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NotificationPayloadsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${NotificationPayloadsScalarFieldEnum}`>;
}
