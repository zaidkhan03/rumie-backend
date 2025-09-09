import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductListingType } from '../prisma/product-listing-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProductCondition } from '../prisma/product-condition.enum';
import { ProductDeliveryMode } from '../prisma/product-delivery-mode.enum';
import { ShippingChargePayer } from '../prisma/shipping-charge-payer.enum';
import { Float } from '@nestjs/graphql';
import { PreferredGender } from '../prisma/preferred-gender.enum';
import { ProductListingCountAggregate } from './product-listing-count-aggregate.output';
import { ProductListingAvgAggregate } from './product-listing-avg-aggregate.output';
import { ProductListingSumAggregate } from './product-listing-sum-aggregate.output';
import { ProductListingMinAggregate } from './product-listing-min-aggregate.output';
import { ProductListingMaxAggregate } from './product-listing-max-aggregate.output';

@ObjectType()
export class ProductListingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

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

    @Field(() => String, {nullable:true})
    weightCategoryId?: string;

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

    @Field(() => Boolean, {nullable:false})
    shippingEnabled!: boolean;

    @Field(() => String, {nullable:true})
    shippingFrom?: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Boolean, {nullable:false})
    soldOut!: boolean;

    @Field(() => Boolean, {nullable:false})
    blackListed!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => [String], {nullable:true})
    wishlistedUserIds?: Array<string>;

    @Field(() => String, {nullable:true})
    legacyHash?: string;

    @Field(() => Boolean, {nullable:false})
    archived!: boolean;

    @Field(() => PreferredGender, {nullable:true})
    categoryPreferredGender?: `${PreferredGender}`;

    @Field(() => String, {nullable:true})
    uploaderEduInstituteId?: string;

    @Field(() => ProductListingCountAggregate, {nullable:true})
    _count?: ProductListingCountAggregate;

    @Field(() => ProductListingAvgAggregate, {nullable:true})
    _avg?: ProductListingAvgAggregate;

    @Field(() => ProductListingSumAggregate, {nullable:true})
    _sum?: ProductListingSumAggregate;

    @Field(() => ProductListingMinAggregate, {nullable:true})
    _min?: ProductListingMinAggregate;

    @Field(() => ProductListingMaxAggregate, {nullable:true})
    _max?: ProductListingMaxAggregate;
}
