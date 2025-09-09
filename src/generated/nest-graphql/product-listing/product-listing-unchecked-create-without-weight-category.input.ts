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
import { ProductListingCreatewishlistedUserIdsInput } from './product-listing-createwishlisted-user-ids.input';
import { PreferredGender } from '../prisma/preferred-gender.enum';
import { UserUncheckedCreateNestedManyWithoutWishlistInput } from '../user/user-unchecked-create-nested-many-without-wishlist.input';
import { ConversationUncheckedCreateNestedManyWithoutProductInput } from '../conversation/conversation-unchecked-create-nested-many-without-product.input';
import { ProductReportUncheckedCreateNestedManyWithoutProductInput } from '../product-report/product-report-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductListingUncheckedCreateWithoutWeightCategoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => [MediaItemCreateInput], {nullable:true})
    media?: Array<MediaItemCreateInput>;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    selectedCategoryFilters?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    extendedData?: any;

    @Field(() => String, {nullable:true})
    brandId?: string;

    @Field(() => String, {nullable:true})
    colorId?: string;

    @Field(() => ProductCondition, {nullable:false})
    productCondition!: `${ProductCondition}`;

    @Field(() => ProductDeliveryMode, {nullable:true})
    productDeliveryMode?: `${ProductDeliveryMode}`;

    @Field(() => ShippingChargePayer, {nullable:true})
    shippingChargePayer?: `${ShippingChargePayer}`;

    @Field(() => RentingPreferenceNullableCreateEnvelopeInput, {nullable:true})
    rentingPreference?: RentingPreferenceNullableCreateEnvelopeInput;

    @Field(() => String, {nullable:false})
    uploaderId!: string;

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

    @Field(() => ProductListingCreatewishlistedUserIdsInput, {nullable:true})
    wishlistedUserIds?: ProductListingCreatewishlistedUserIdsInput;

    @Field(() => String, {nullable:true})
    legacyHash?: string;

    @Field(() => Boolean, {nullable:true})
    archived?: boolean;

    @Field(() => PreferredGender, {nullable:true})
    categoryPreferredGender?: `${PreferredGender}`;

    @Field(() => String, {nullable:true})
    uploaderEduInstituteId?: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutWishlistInput, {nullable:true})
    wishlistedBy?: UserUncheckedCreateNestedManyWithoutWishlistInput;

    @Field(() => ConversationUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    conversations?: ConversationUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductReportUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    reports?: ProductReportUncheckedCreateNestedManyWithoutProductInput;
}
