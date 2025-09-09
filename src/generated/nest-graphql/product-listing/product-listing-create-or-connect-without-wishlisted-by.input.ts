import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutWishlistedByInput } from './product-listing-create-without-wishlisted-by.input';

@InputType()
export class ProductListingCreateOrConnectWithoutWishlistedByInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutWishlistedByInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutWishlistedByInput)
    create!: ProductListingCreateWithoutWishlistedByInput;
}
