import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumNotificationTypeFilter } from '../prisma/enum-notification-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class NotificationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [NotificationWhereInput], {nullable:true})
    AND?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    OR?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    NOT?: Array<NotificationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumNotificationTypeFilter, {nullable:true})
    type?: EnumNotificationTypeFilter;

    @Field(() => JsonFilter, {nullable:true})
    payload?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRead?: BoolFilter;
}
