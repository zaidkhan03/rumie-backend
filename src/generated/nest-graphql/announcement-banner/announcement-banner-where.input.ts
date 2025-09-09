import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAnnouncementBannerPositionFilter } from '../prisma/enum-announcement-banner-position-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumInternalCTANullableFilter } from '../prisma/enum-internal-cta-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AnnouncementBannerWhereInput {

    @Field(() => [AnnouncementBannerWhereInput], {nullable:true})
    AND?: Array<AnnouncementBannerWhereInput>;

    @Field(() => [AnnouncementBannerWhereInput], {nullable:true})
    OR?: Array<AnnouncementBannerWhereInput>;

    @Field(() => [AnnouncementBannerWhereInput], {nullable:true})
    NOT?: Array<AnnouncementBannerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumAnnouncementBannerPositionFilter, {nullable:true})
    position?: EnumAnnouncementBannerPositionFilter;

    @Field(() => BoolFilter, {nullable:true})
    hasInternalCTA?: BoolFilter;

    @Field(() => EnumInternalCTANullableFilter, {nullable:true})
    internalCTA?: EnumInternalCTANullableFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
