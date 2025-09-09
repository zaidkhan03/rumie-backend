import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnnouncementBannerPosition } from '../prisma/announcement-banner-position.enum';
import { InternalCTA } from '../prisma/internal-cta.enum';

@ObjectType()
export class AnnouncementBannerMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => AnnouncementBannerPosition, {nullable:true})
    position?: `${AnnouncementBannerPosition}`;

    @Field(() => Boolean, {nullable:true})
    hasInternalCTA?: boolean;

    @Field(() => InternalCTA, {nullable:true})
    internalCTA?: `${InternalCTA}`;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
