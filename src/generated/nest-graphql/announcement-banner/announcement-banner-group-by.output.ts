import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnnouncementBannerPosition } from '../prisma/announcement-banner-position.enum';
import { InternalCTA } from '../prisma/internal-cta.enum';
import { AnnouncementBannerCountAggregate } from './announcement-banner-count-aggregate.output';
import { AnnouncementBannerMinAggregate } from './announcement-banner-min-aggregate.output';
import { AnnouncementBannerMaxAggregate } from './announcement-banner-max-aggregate.output';

@ObjectType()
export class AnnouncementBannerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnnouncementBannerPosition, {nullable:false})
    position!: `${AnnouncementBannerPosition}`;

    @Field(() => Boolean, {nullable:false})
    hasInternalCTA!: boolean;

    @Field(() => InternalCTA, {nullable:true})
    internalCTA?: `${InternalCTA}`;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AnnouncementBannerCountAggregate, {nullable:true})
    _count?: AnnouncementBannerCountAggregate;

    @Field(() => AnnouncementBannerMinAggregate, {nullable:true})
    _min?: AnnouncementBannerMinAggregate;

    @Field(() => AnnouncementBannerMaxAggregate, {nullable:true})
    _max?: AnnouncementBannerMaxAggregate;
}
