import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PersonalDMWhereInput {

    @Field(() => [PersonalDMWhereInput], {nullable:true})
    AND?: Array<PersonalDMWhereInput>;

    @Field(() => [PersonalDMWhereInput], {nullable:true})
    OR?: Array<PersonalDMWhereInput>;

    @Field(() => [PersonalDMWhereInput], {nullable:true})
    NOT?: Array<PersonalDMWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    initiatedBy?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participantIds?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastMessageId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    payload?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    consumersLastSeen?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    providersLastSeen?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
