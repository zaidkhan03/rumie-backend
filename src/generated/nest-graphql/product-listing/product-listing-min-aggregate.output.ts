import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductListingType } from '../prisma/product-listing-type.enum';
import { ProductCondition } from '../prisma/product-condition.enum';
import { ProductDeliveryMode } from '../prisma/product-delivery-mode.enum';
import { ShippingChargePayer } from '../prisma/shipping-charge-payer.enum';
import { Float } from '@nestjs/graphql';
import { PreferredGender } from '../prisma/preferred-gender.enum';

@ObjectType()
export class ProductListingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProductListingType, {nullable:true})
    type?: `${ProductListingType}`;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => String, {nullable:true})
    brandId?: string;

    @Field(() => String, {nullable:true})
    colorId?: string;

    @Field(() => ProductCondition, {nullable:true})
    productCondition?: `${ProductCondition}`;

    @Field(() => ProductDeliveryMode, {nullable:true})
    productDeliveryMode?: `${ProductDeliveryMode}`;

    @Field(() => ShippingChargePayer, {nullable:true})
    shippingChargePayer?: `${ShippingChargePayer}`;

    @Field(() => String, {nullable:true})
    weightCategoryId?: string;

    @Field(() => String, {nullable:true})
    uploaderId?: string;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:true})
    priceString?: string;

    @Field(() => String, {nullable:true})
    description?: string;

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

    @Field(() => String, {nullable:true})
    uploaderEduInstituteId?: string;
}
