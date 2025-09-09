import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnouncementBannerUpdateManyMutationInput } from './announcement-banner-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnnouncementBannerWhereInput } from './announcement-banner-where.input';

@ArgsType()
export class UpdateManyAnnouncementBannerArgs {

    @Field(() => AnnouncementBannerUpdateManyMutationInput, {nullable:false})
    @Type(() => AnnouncementBannerUpdateManyMutationInput)
    data!: AnnouncementBannerUpdateManyMutationInput;

    @Field(() => AnnouncementBannerWhereInput, {nullable:true})
    @Type(() => AnnouncementBannerWhereInput)
    where?: AnnouncementBannerWhereInput;
}
