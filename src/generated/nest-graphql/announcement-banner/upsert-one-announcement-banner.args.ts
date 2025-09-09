import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnouncementBannerWhereUniqueInput } from './announcement-banner-where-unique.input';
import { Type } from 'class-transformer';
import { AnnouncementBannerCreateInput } from './announcement-banner-create.input';
import { AnnouncementBannerUpdateInput } from './announcement-banner-update.input';

@ArgsType()
export class UpsertOneAnnouncementBannerArgs {

    @Field(() => AnnouncementBannerWhereUniqueInput, {nullable:false})
    @Type(() => AnnouncementBannerWhereUniqueInput)
    where!: Prisma.AtLeast<AnnouncementBannerWhereUniqueInput, 'id'>;

    @Field(() => AnnouncementBannerCreateInput, {nullable:false})
    @Type(() => AnnouncementBannerCreateInput)
    create!: AnnouncementBannerCreateInput;

    @Field(() => AnnouncementBannerUpdateInput, {nullable:false})
    @Type(() => AnnouncementBannerUpdateInput)
    update!: AnnouncementBannerUpdateInput;
}
