import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnouncementBannerCreateManyInput } from './announcement-banner-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnnouncementBannerArgs {

    @Field(() => [AnnouncementBannerCreateManyInput], {nullable:false})
    @Type(() => AnnouncementBannerCreateManyInput)
    data!: Array<AnnouncementBannerCreateManyInput>;
}
