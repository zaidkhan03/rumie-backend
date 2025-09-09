import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnouncementBannerCreateInput } from './announcement-banner-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnnouncementBannerArgs {

    @Field(() => AnnouncementBannerCreateInput, {nullable:false})
    @Type(() => AnnouncementBannerCreateInput)
    data!: AnnouncementBannerCreateInput;
}
