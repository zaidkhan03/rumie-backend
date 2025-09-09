import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PushNotificationDataWhereInput {

    @Field(() => [PushNotificationDataWhereInput], {nullable:true})
    AND?: Array<PushNotificationDataWhereInput>;

    @Field(() => [PushNotificationDataWhereInput], {nullable:true})
    OR?: Array<PushNotificationDataWhereInput>;

    @Field(() => [PushNotificationDataWhereInput], {nullable:true})
    NOT?: Array<PushNotificationDataWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cardImage?: StringNullableFilter;
}
