import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

@ObjectType()
export class NotificationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => NotificationType, {nullable:false})
    type!: `${NotificationType}`;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isRead!: boolean;

    @Field(() => NotificationCountAggregate, {nullable:true})
    _count?: NotificationCountAggregate;

    @Field(() => NotificationMinAggregate, {nullable:true})
    _min?: NotificationMinAggregate;

    @Field(() => NotificationMaxAggregate, {nullable:true})
    _max?: NotificationMaxAggregate;
}
