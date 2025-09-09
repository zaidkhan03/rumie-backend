import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutWishlistedByInput } from './product-listing-update-without-wishlisted-by.input';
import { ProductListingCreateWithoutWishlistedByInput } from './product-listing-create-without-wishlisted-by.input';

@InputType()
export class ProductListingUpsertWithWhereUniqueWithoutWishlistedByInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateWithoutWishlistedByInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutWishlistedByInput)
    update!: ProductListingUpdateWithoutWishlistedByInput;

    @Field(() => ProductListingCreateWithoutWishlistedByInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutWishlistedByInput)
    create!: ProductListingCreateWithoutWishlistedByInput;
}
