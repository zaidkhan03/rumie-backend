import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PackageDimensions } from '../package-dimensions/package-dimensions.model';
import { PackageWeight } from '../package-weight/package-weight.model';
import { Float } from '@nestjs/graphql';
import { ProductListing } from '../product-listing/product-listing.model';
import { WeightCategoryCount } from './weight-category-count.output';

@ObjectType()
export class WeightCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    alias!: string;

    @Field(() => PackageDimensions, {nullable:false})
    packageDimensions?: PackageDimensions;

    @Field(() => PackageWeight, {nullable:false})
    packageWeight?: PackageWeight;

    @Field(() => Float, {nullable:false})
    shippingFee!: number;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ProductListing], {nullable:true})
    ProductListing?: Array<ProductListing>;

    @Field(() => WeightCategoryCount, {nullable:false})
    _count?: WeightCategoryCount;
}
