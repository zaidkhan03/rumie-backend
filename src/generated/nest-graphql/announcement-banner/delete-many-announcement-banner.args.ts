import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnouncementBannerWhereInput } from './announcement-banner-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAnnouncementBannerArgs {

    @Field(() => AnnouncementBannerWhereInput, {nullable:true})
    @Type(() => AnnouncementBannerWhereInput)
    where?: AnnouncementBannerWhereInput;
}
