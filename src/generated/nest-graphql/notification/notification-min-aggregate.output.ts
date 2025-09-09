import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';

@ObjectType()
export class NotificationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => NotificationType, {nullable:true})
    type?: `${NotificationType}`;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
}
