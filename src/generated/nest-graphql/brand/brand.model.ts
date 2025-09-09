import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductListing } from '../product-listing/product-listing.model';
import { BrandCount } from './brand-count.output';

@ObjectType()
export class Brand {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    featured!: boolean;

    @Field(() => [ProductListing], {nullable:true})
    ProductListing?: Array<ProductListing>;

    @Field(() => BrandCount, {nullable:false})
    _count?: BrandCount;
}
