import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnouncementBannerPosition } from './announcement-banner-position.enum';

@InputType()
export class NestedEnumAnnouncementBannerPositionFilter {

    @Field(() => AnnouncementBannerPosition, {nullable:true})
    equals?: `${AnnouncementBannerPosition}`;

    @Field(() => [AnnouncementBannerPosition], {nullable:true})
    in?: Array<`${AnnouncementBannerPosition}`>;

    @Field(() => [AnnouncementBannerPosition], {nullable:true})
    notIn?: Array<`${AnnouncementBannerPosition}`>;

    @Field(() => NestedEnumAnnouncementBannerPositionFilter, {nullable:true})
    not?: NestedEnumAnnouncementBannerPositionFilter;
}
