import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnouncementBannerWhereUniqueInput } from './announcement-banner-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAnnouncementBannerOrThrowArgs {

    @Field(() => AnnouncementBannerWhereUniqueInput, {nullable:false})
    @Type(() => AnnouncementBannerWhereUniqueInput)
    where!: Prisma.AtLeast<AnnouncementBannerWhereUniqueInput, 'id'>;
}
