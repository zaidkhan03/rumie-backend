import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnnouncementBannerCountAggregate } from './announcement-banner-count-aggregate.output';
import { AnnouncementBannerMinAggregate } from './announcement-banner-min-aggregate.output';
import { AnnouncementBannerMaxAggregate } from './announcement-banner-max-aggregate.output';

@ObjectType()
export class AggregateAnnouncementBanner {

    @Field(() => AnnouncementBannerCountAggregate, {nullable:true})
    _count?: AnnouncementBannerCountAggregate;

    @Field(() => AnnouncementBannerMinAggregate, {nullable:true})
    _min?: AnnouncementBannerMinAggregate;

    @Field(() => AnnouncementBannerMaxAggregate, {nullable:true})
    _max?: AnnouncementBannerMaxAggregate;
}
