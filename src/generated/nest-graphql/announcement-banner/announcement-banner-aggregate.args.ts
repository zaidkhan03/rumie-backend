import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnouncementBannerWhereInput } from './announcement-banner-where.input';
import { Type } from 'class-transformer';
import { AnnouncementBannerOrderByWithRelationInput } from './announcement-banner-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AnnouncementBannerWhereUniqueInput } from './announcement-banner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnnouncementBannerCountAggregateInput } from './announcement-banner-count-aggregate.input';
import { AnnouncementBannerMinAggregateInput } from './announcement-banner-min-aggregate.input';
import { AnnouncementBannerMaxAggregateInput } from './announcement-banner-max-aggregate.input';

@ArgsType()
export class AnnouncementBannerAggregateArgs {

    @Field(() => AnnouncementBannerWhereInput, {nullable:true})
    @Type(() => AnnouncementBannerWhereInput)
    where?: AnnouncementBannerWhereInput;

    @Field(() => [AnnouncementBannerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnnouncementBannerOrderByWithRelationInput>;

    @Field(() => AnnouncementBannerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AnnouncementBannerWhereUniqueInput, 'id'>;

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
