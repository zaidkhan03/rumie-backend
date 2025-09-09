import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumAnnouncementBannerPositionWithAggregatesFilter } from '../prisma/enum-announcement-banner-position-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumInternalCTANullableWithAggregatesFilter } from '../prisma/enum-internal-cta-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AnnouncementBannerScalarWhereWithAggregatesInput {

    @Field(() => [AnnouncementBannerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AnnouncementBannerScalarWhereWithAggregatesInput>;

    @Field(() => [AnnouncementBannerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AnnouncementBannerScalarWhereWithAggregatesInput>;

    @Field(() => [AnnouncementBannerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AnnouncementBannerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumAnnouncementBannerPositionWithAggregatesFilter, {nullable:true})
    position?: EnumAnnouncementBannerPositionWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    hasInternalCTA?: BoolWithAggregatesFilter;

    @Field(() => EnumInternalCTANullableWithAggregatesFilter, {nullable:true})
    internalCTA?: EnumInternalCTANullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
