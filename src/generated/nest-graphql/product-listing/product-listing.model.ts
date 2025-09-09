import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductListingType } from '../prisma/product-listing-type.enum';
import { MediaItem } from '../media-item/media-item.model';
import { GraphQLJSON } from 'graphql-type-json';
import { ProductCondition } from '../prisma/product-condition.enum';
import { ProductDeliveryMode } from '../prisma/product-delivery-mode.enum';
import { ShippingChargePayer } from '../prisma/shipping-charge-payer.enum';
import { RentingPreference } from '../renting-preference/renting-preference.model';
import { Float } from '@nestjs/graphql';
import { PreferredGender } from '../prisma/preferred-gender.enum';
import { ProductCategory } from '../product-category/product-category.model';
import { Brand } from '../brand/brand.model';
import { Color } from '../color/color.model';
import { WeightCategory } from '../weight-category/weight-category.model';
import { User } from '../user/user.model';
import { Conversation } from '../conversation/conversation.model';
import { ProductReport } from '../product-report/product-report.model';
import { EduInstitute } from '../edu-institute/edu-institute.model';
import { ProductListingCount } from './product-listing-count.output';

@ObjectType()
export class ProductListing {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => [MediaItem], {nullable:true})
    media?: Array<MediaItem>;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    selectedCategoryFilters!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    extendedData!: any | null;

    @Field(() => String, {nullable:true})
    brandId!: string | null;

    @Field(() => String, {nullable:true})
    colorId!: string | null;

    @Field(() => ProductCondition, {nullable:false})
    productCondition!: `${ProductCondition}`;

    @Field(() => ProductDeliveryMode, {nullable:true})
    productDeliveryMode!: `${ProductDeliveryMode}` | null;

    @Field(() => ShippingChargePayer, {nullable:true})
    shippingChargePayer!: `${ShippingChargePayer}` | null;

    @Field(() => RentingPreference, {nullable:true})
    rentingPreference?: RentingPreference | null;

    @Field(() => String, {nullable:true})
    weightCategoryId!: string | null;

    @Field(() => String, {nullable:false})
    uploaderId!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:true})
    priceString!: string | null;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    reasonForSelling!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    shippingEnabled!: boolean;

    @Field(() => String, {nullable:true})
    shippingFrom!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    soldOut!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    blackListed!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [String], {nullable:true})
    wishlistedUserIds!: Array<string>;

    @Field(() => String, {nullable:true})
    legacyHash!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    archived!: boolean;

    @Field(() => PreferredGender, {nullable:true})
    categoryPreferredGender!: `${PreferredGender}` | null;

    @Field(() => String, {nullable:true})
    uploaderEduInstituteId!: string | null;

    @Field(() => ProductCategory, {nullable:true})
    category?: ProductCategory | null;

    @Field(() => Brand, {nullable:true})
    brand?: Brand | null;

    @Field(() => Color, {nullable:true})
    color?: Color | null;

    @Field(() => WeightCategory, {nullable:true})
    weightCategory?: WeightCategory | null;

    @Field(() => User, {nullable:false})
    uploader?: User;

    @Field(() => [User], {nullable:true})
    wishlistedBy?: Array<User>;

    @Field(() => [Conversation], {nullable:true})
    conversations?: Array<Conversation>;

    @Field(() => [ProductReport], {nullable:true})
    reports?: Array<ProductReport>;

    @Field(() => EduInstitute, {nullable:true})
    uploaderEduInstitute?: EduInstitute | null;

    @Field(() => ProductListingCount, {nullable:false})
    _count?: ProductListingCount;
}
