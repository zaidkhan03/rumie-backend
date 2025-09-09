import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductListingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    selectedCategoryFilters!: number;

    @Field(() => Int, {nullable:false})
    extendedData!: number;

    @Field(() => Int, {nullable:false})
    brandId!: number;

    @Field(() => Int, {nullable:false})
    colorId!: number;

    @Field(() => Int, {nullable:false})
    productCondition!: number;

    @Field(() => Int, {nullable:false})
    productDeliveryMode!: number;

    @Field(() => Int, {nullable:false})
    shippingChargePayer!: number;

    @Field(() => Int, {nullable:false})
    weightCategoryId!: number;

    @Field(() => Int, {nullable:false})
    uploaderId!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    priceString!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    reasonForSelling!: number;

    @Field(() => Int, {nullable:false})
    shippingEnabled!: number;

    @Field(() => Int, {nullable:false})
    shippingFrom!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    soldOut!: number;

    @Field(() => Int, {nullable:false})
    blackListed!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    wishlistedUserIds!: number;

    @Field(() => Int, {nullable:false})
    legacyHash!: number;

    @Field(() => Int, {nullable:false})
    archived!: number;

    @Field(() => Int, {nullable:false})
    categoryPreferredGender!: number;

    @Field(() => Int, {nullable:false})
    uploaderEduInstituteId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
