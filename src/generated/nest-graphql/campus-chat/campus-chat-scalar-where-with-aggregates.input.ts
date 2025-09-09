import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCampusChatTypeWithAggregatesFilter } from '../prisma/enum-campus-chat-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CampusChatScalarWhereWithAggregatesInput {

    @Field(() => [CampusChatScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CampusChatScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CampusChatScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CampusChatScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    eduInstituteId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumCampusChatTypeWithAggregatesFilter, {nullable:true})
    type?: EnumCampusChatTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
