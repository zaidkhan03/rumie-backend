import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnouncementBannerUpdateInput } from './announcement-banner-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AnnouncementBannerWhereUniqueInput } from './announcement-banner-where-unique.input';

@ArgsType()
export class UpdateOneAnnouncementBannerArgs {

    @Field(() => AnnouncementBannerUpdateInput, {nullable:false})
    @Type(() => AnnouncementBannerUpdateInput)
    data!: AnnouncementBannerUpdateInput;

    @Field(() => AnnouncementBannerWhereUniqueInput, {nullable:false})
    @Type(() => AnnouncementBannerWhereUniqueInput)
    where!: Prisma.AtLeast<AnnouncementBannerWhereUniqueInput, 'id'>;
}
