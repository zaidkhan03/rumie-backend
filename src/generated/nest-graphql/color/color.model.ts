import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductListing } from '../product-listing/product-listing.model';
import { ColorCount } from './color-count.output';

@ObjectType()
export class Color {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    hex!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ProductListing], {nullable:true})
    ProductListing?: Array<ProductListing>;

    @Field(() => ColorCount, {nullable:false})
    _count?: ColorCount;
}
