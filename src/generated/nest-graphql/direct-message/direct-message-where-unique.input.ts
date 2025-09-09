import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDMTypeFilter } from '../prisma/enum-dm-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DirectMessageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    clientId?: string;

    @Field(() => [DirectMessageWhereInput], {nullable:true})
    AND?: Array<DirectMessageWhereInput>;

    @Field(() => [DirectMessageWhereInput], {nullable:true})
    OR?: Array<DirectMessageWhereInput>;

    @Field(() => [DirectMessageWhereInput], {nullable:true})
    NOT?: Array<DirectMessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    senderId?: StringFilter;

    @Field(() => EnumDMTypeFilter, {nullable:true})
    type?: EnumDMTypeFilter;

    @Field(() => JsonFilter, {nullable:true})
    payload?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    personalDmId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
