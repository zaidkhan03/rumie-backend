import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCampusChatTypeFilter } from '../prisma/enum-campus-chat-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CampusChatScalarWhereInput {

    @Field(() => [CampusChatScalarWhereInput], {nullable:true})
    AND?: Array<CampusChatScalarWhereInput>;

    @Field(() => [CampusChatScalarWhereInput], {nullable:true})
    OR?: Array<CampusChatScalarWhereInput>;

    @Field(() => [CampusChatScalarWhereInput], {nullable:true})
    NOT?: Array<CampusChatScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    eduInstituteId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumCampusChatTypeFilter, {nullable:true})
    type?: EnumCampusChatTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
