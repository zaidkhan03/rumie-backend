import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCampusChatTypeFilter } from '../prisma/enum-campus-chat-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EduInstituteRelationFilter } from '../edu-institute/edu-institute-relation-filter.input';

@InputType()
export class CampusChatWhereInput {

    @Field(() => [CampusChatWhereInput], {nullable:true})
    AND?: Array<CampusChatWhereInput>;

    @Field(() => [CampusChatWhereInput], {nullable:true})
    OR?: Array<CampusChatWhereInput>;

    @Field(() => [CampusChatWhereInput], {nullable:true})
    NOT?: Array<CampusChatWhereInput>;

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

    @Field(() => EduInstituteRelationFilter, {nullable:true})
    eduInstitute?: EduInstituteRelationFilter;
}
