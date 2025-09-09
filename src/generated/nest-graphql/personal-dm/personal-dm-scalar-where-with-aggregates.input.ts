import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PersonalDMScalarWhereWithAggregatesInput {

    @Field(() => [PersonalDMScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PersonalDMScalarWhereWithAggregatesInput>;

    @Field(() => [PersonalDMScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PersonalDMScalarWhereWithAggregatesInput>;

    @Field(() => [PersonalDMScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PersonalDMScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    initiatedBy?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participantIds?: StringNullableListFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    lastMessageId?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    valid?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    payload?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    consumersLastSeen?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    providersLastSeen?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
