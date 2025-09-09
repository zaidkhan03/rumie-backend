import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnouncementBannerPosition } from '../prisma/announcement-banner-position.enum';
import { InternalCTA } from '../prisma/internal-cta.enum';

@InputType()
export class AnnouncementBannerCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
