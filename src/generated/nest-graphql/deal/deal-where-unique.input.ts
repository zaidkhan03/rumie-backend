import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealWhereInput } from './deal-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EduInstituteSelectOptionObjectEqualityInput } from '../prisma/edu-institute-select-option-object-equality.input';
import { DealBusinessDetailsCompositeFilter } from '../prisma/deal-business-details-composite-filter.input';
import { DealTextContentCompositeFilter } from '../prisma/deal-text-content-composite-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDealTypeFilter } from '../prisma/enum-deal-type-filter.input';
import { DateRangeCompositeFilter } from '../prisma/date-range-composite-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class DealWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [DealWhereInput], {nullable:true})
    AND?: Array<DealWhereInput>;

    @Field(() => [DealWhereInput], {nullable:true})
    OR?: Array<DealWhereInput>;

    @Field(() => [DealWhereInput], {nullable:true})
    NOT?: Array<DealWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => [EduInstituteSelectOptionObjectEqualityInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionObjectEqualityInput>;

    @Field(() => DealBusinessDetailsCompositeFilter, {nullable:true})
    business?: DealBusinessDetailsCompositeFilter;

    @Field(() => DealTextContentCompositeFilter, {nullable:true})
    content?: DealTextContentCompositeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => EnumDealTypeFilter, {nullable:true})
    type?: EnumDealTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    couponCode?: StringFilter;

    @Field(() => DateRangeCompositeFilter, {nullable:true})
    validity?: DateRangeCompositeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    savedUserIds?: StringNullableListFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    savedUsers?: UserListRelationFilter;
}
