import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class NotificationUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
}
