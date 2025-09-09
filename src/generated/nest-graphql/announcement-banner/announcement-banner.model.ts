import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AnnouncementBannerPosition } from '../prisma/announcement-banner-position.enum';
import { InternalCTA } from '../prisma/internal-cta.enum';

@ObjectType()
export class AnnouncementBanner {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnnouncementBannerPosition, {nullable:false})
    position!: `${AnnouncementBannerPosition}`;

    @Field(() => Boolean, {nullable:false})
    hasInternalCTA!: boolean;

    @Field(() => InternalCTA, {nullable:true})
    internalCTA!: `${InternalCTA}` | null;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
