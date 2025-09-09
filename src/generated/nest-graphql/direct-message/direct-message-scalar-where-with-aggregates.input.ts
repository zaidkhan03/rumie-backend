import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDMTypeWithAggregatesFilter } from '../prisma/enum-dm-type-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DirectMessageScalarWhereWithAggregatesInput {

    @Field(() => [DirectMessageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DirectMessageScalarWhereWithAggregatesInput>;

    @Field(() => [DirectMessageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DirectMessageScalarWhereWithAggregatesInput>;

    @Field(() => [DirectMessageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DirectMessageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    clientId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    senderId?: StringWithAggregatesFilter;

    @Field(() => EnumDMTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDMTypeWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    payload?: JsonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    personalDmId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
