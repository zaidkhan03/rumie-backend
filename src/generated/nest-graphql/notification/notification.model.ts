import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Notification {

    @Field(() => ID, {nullable:false})
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
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    expiresAt!: Date | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isRead!: boolean;
}
