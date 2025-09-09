import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BannerType } from '../prisma/banner-type.enum';
import { BannerImage } from '../banner-image/banner-image.model';
import { DateRange } from '../date-range/date-range.model';
import { BannerPosition } from '../prisma/banner-position.enum';

@ObjectType()
export class Banner {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BannerType, {nullable:false})
    type!: `${BannerType}`;

    @Field(() => BannerImage, {nullable:false})
    image?: BannerImage;

    @Field(() => [BannerImage], {nullable:true})
    images?: Array<BannerImage>;

    @Field(() => DateRange, {nullable:false})
    validity?: DateRange;

    @Field(() => [BannerPosition], {nullable:true})
    positions!: Array<`${BannerPosition}`>;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
