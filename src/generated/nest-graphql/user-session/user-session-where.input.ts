import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPlatformFilter } from '../prisma/enum-platform-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserSessionWhereInput {

    @Field(() => [UserSessionWhereInput], {nullable:true})
    AND?: Array<UserSessionWhereInput>;

    @Field(() => [UserSessionWhereInput], {nullable:true})
    OR?: Array<UserSessionWhereInput>;

    @Field(() => [UserSessionWhereInput], {nullable:true})
    NOT?: Array<UserSessionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pushToken?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    deviceModel?: StringFilter;

    @Field(() => EnumPlatformFilter, {nullable:true})
    platform?: EnumPlatformFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    started?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    lastSeen?: DateTimeFilter;
}
