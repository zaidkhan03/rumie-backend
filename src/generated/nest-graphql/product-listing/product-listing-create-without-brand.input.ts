import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingType } from '../prisma/product-listing-type.enum';
import { MediaItemCreateInput } from '../media-item/media-item-create.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ProductCondition } from '../prisma/product-condition.enum';
import { ProductDeliveryMode } from '../prisma/product-delivery-mode.enum';
import { ShippingChargePayer } from '../prisma/shipping-charge-payer.enum';
import { RentingPreferenceNullableCreateEnvelopeInput } from '../prisma/renting-preference-nullable-create-envelope.input';
import { Float } from '@nestjs/graphql';
import { PreferredGender } from '../prisma/preferred-gender.enum';
import { ProductCategoryCreateNestedOneWithoutProductListingsInput } from '../product-category/product-category-create-nested-one-without-product-listings.input';
import { ColorCreateNestedOneWithoutProductListingInput } from '../color/color-create-nested-one-without-product-listing.input';
import { WeightCategoryCreateNestedOneWithoutProductListingInput } from '../weight-category/weight-category-create-nested-one-without-product-listing.input';
import { UserCreateNestedOneWithoutProductListingsInput } from '../user/user-create-nested-one-without-product-listings.input';
import { UserCreateNestedManyWithoutWishlistInput } from '../user/user-create-nested-many-without-wishlist.input';
import { ConversationCreateNestedManyWithoutProductInput } from '../conversation/conversation-create-nested-many-without-product.input';
import { ProductReportCreateNestedManyWithoutProductInput } from '../product-report/product-report-create-nested-many-without-product.input';
import { EduInstituteCreateNestedOneWithoutProductListingsInput } from '../edu-institute/edu-institute-create-nested-one-without-product-listings.input';

@InputType()
export class ProductListingCreateWithoutBrandInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => [MediaItemCreateInput], {nullable:true})
    media?: Array<MediaItemCreateInput>;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    selectedCategoryFilters?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    extendedData?: any;

    @Field(() => ProductCondition, {nullable:false})
    productCondition!: `${ProductCondition}`;

    @Field(() => ProductDeliveryMode, {nullable:true})
    productDeliveryMode?: `${ProductDeliveryMode}`;

    @Field(() => ShippingChargePayer, {nullable:true})
    shippingChargePayer?: `${ShippingChargePayer}`;

    @Field(() => RentingPreferenceNullableCreateEnvelopeInput, {nullable:true})
    rentingPreference?: RentingPreferenceNullableCreateEnvelopeInput;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:true})
    priceString?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    reasonForSelling?: string;

    @Field(() => Boolean, {nullable:true})
    shippingEnabled?: boolean;

    @Field(() => String, {nullable:true})
    shippingFrom?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Boolean, {nullable:true})
    soldOut?: boolean;

    @Field(() => Boolean, {nullable:true})
    blackListed?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    legacyHash?: string;

    @Field(() => Boolean, {nullable:true})
    archived?: boolean;

    @Field(() => PreferredGender, {nullable:true})
    categoryPreferredGender?: `${PreferredGender}`;

    @Field(() => ProductCategoryCreateNestedOneWithoutProductListingsInput, {nullable:true})
    category?: ProductCategoryCreateNestedOneWithoutProductListingsInput;

    @Field(() => ColorCreateNestedOneWithoutProductListingInput, {nullable:true})
    color?: ColorCreateNestedOneWithoutProductListingInput;

    @Field(() => WeightCategoryCreateNestedOneWithoutProductListingInput, {nullable:true})
    weightCategory?: WeightCategoryCreateNestedOneWithoutProductListingInput;

    @Field(() => UserCreateNestedOneWithoutProductListingsInput, {nullable:false})
    uploader!: UserCreateNestedOneWithoutProductListingsInput;

    @Field(() => UserCreateNestedManyWithoutWishlistInput, {nullable:true})
    wishlistedBy?: UserCreateNestedManyWithoutWishlistInput;

    @Field(() => ConversationCreateNestedManyWithoutProductInput, {nullable:true})
    conversations?: ConversationCreateNestedManyWithoutProductInput;

    @Field(() => ProductReportCreateNestedManyWithoutProductInput, {nullable:true})
    reports?: ProductReportCreateNestedManyWithoutProductInput;

    @Field(() => EduInstituteCreateNestedOneWithoutProductListingsInput, {nullable:true})
    uploaderEduInstitute?: EduInstituteCreateNestedOneWithoutProductListingsInput;
}
