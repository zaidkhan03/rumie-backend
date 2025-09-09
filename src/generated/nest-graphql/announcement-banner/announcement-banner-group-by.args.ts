import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnouncementBannerWhereInput } from './announcement-banner-where.input';
import { Type } from 'class-transformer';
import { AnnouncementBannerOrderByWithAggregationInput } from './announcement-banner-order-by-with-aggregation.input';
import { AnnouncementBannerScalarFieldEnum } from './announcement-banner-scalar-field.enum';
import { AnnouncementBannerScalarWhereWithAggregatesInput } from './announcement-banner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnnouncementBannerCountAggregateInput } from './announcement-banner-count-aggregate.input';
import { AnnouncementBannerMinAggregateInput } from './announcement-banner-min-aggregate.input';
import { AnnouncementBannerMaxAggregateInput } from './announcement-banner-max-aggregate.input';

@ArgsType()
export class AnnouncementBannerGroupByArgs {

    @Field(() => AnnouncementBannerWhereInput, {nullable:true})
    @Type(() => AnnouncementBannerWhereInput)
    where?: AnnouncementBannerWhereInput;

    @Field(() => [AnnouncementBannerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AnnouncementBannerOrderByWithAggregationInput>;

    @Field(() => [AnnouncementBannerScalarFieldEnum], {nullable:false})
    by!: Array<`${AnnouncementBannerScalarFieldEnum}`>;

    @Field(() => AnnouncementBannerScalarWhereWithAggregatesInput, {nullable:true})
    having?: AnnouncementBannerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnnouncementBannerCountAggregateInput, {nullable:true})
    _count?: AnnouncementBannerCountAggregateInput;

    @Field(() => AnnouncementBannerMinAggregateInput, {nullable:true})
    _min?: AnnouncementBannerMinAggregateInput;

    @Field(() => AnnouncementBannerMaxAggregateInput, {nullable:true})
    _max?: AnnouncementBannerMaxAggregateInput;
}
