import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumBannerTypeFilter } from '../prisma/enum-banner-type-filter.input';
import { BannerImageCompositeFilter } from '../prisma/banner-image-composite-filter.input';
import { BannerImageObjectEqualityInput } from '../prisma/banner-image-object-equality.input';
import { DateRangeCompositeFilter } from '../prisma/date-range-composite-filter.input';
import { EnumBannerPositionNullableListFilter } from '../prisma/enum-banner-position-nullable-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BannerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [BannerWhereInput], {nullable:true})
    AND?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    OR?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    NOT?: Array<BannerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumBannerTypeFilter, {nullable:true})
    type?: EnumBannerTypeFilter;

    @Field(() => BannerImageCompositeFilter, {nullable:true})
    image?: BannerImageCompositeFilter;

    @Field(() => [BannerImageObjectEqualityInput], {nullable:true})
    images?: Array<BannerImageObjectEqualityInput>;

    @Field(() => DateRangeCompositeFilter, {nullable:true})
    validity?: DateRangeCompositeFilter;

    @Field(() => EnumBannerPositionNullableListFilter, {nullable:true})
    positions?: EnumBannerPositionNullableListFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
