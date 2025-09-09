import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnouncementBannerPosition } from './announcement-banner-position.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnnouncementBannerPositionFilter } from './nested-enum-announcement-banner-position-filter.input';

@InputType()
export class NestedEnumAnnouncementBannerPositionWithAggregatesFilter {

    @Field(() => AnnouncementBannerPosition, {nullable:true})
    equals?: `${AnnouncementBannerPosition}`;

    @Field(() => [AnnouncementBannerPosition], {nullable:true})
    in?: Array<`${AnnouncementBannerPosition}`>;

    @Field(() => [AnnouncementBannerPosition], {nullable:true})
    notIn?: Array<`${AnnouncementBannerPosition}`>;

    @Field(() => NestedEnumAnnouncementBannerPositionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnnouncementBannerPositionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnnouncementBannerPositionFilter, {nullable:true})
    _min?: NestedEnumAnnouncementBannerPositionFilter;

    @Field(() => NestedEnumAnnouncementBannerPositionFilter, {nullable:true})
    _max?: NestedEnumAnnouncementBannerPositionFilter;
}
