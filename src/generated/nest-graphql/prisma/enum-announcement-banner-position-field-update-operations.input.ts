import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnouncementBannerPosition } from './announcement-banner-position.enum';

@InputType()
export class EnumAnnouncementBannerPositionFieldUpdateOperationsInput {

    @Field(() => AnnouncementBannerPosition, {nullable:true})
    set?: `${AnnouncementBannerPosition}`;
}
