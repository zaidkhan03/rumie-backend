import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutWishlistedByInput } from './product-listing-create-without-wishlisted-by.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutWishlistedByInput } from './product-listing-create-or-connect-without-wishlisted-by.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedManyWithoutWishlistedByInput {

    @Field(() => [ProductListingCreateWithoutWishlistedByInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutWishlistedByInput)
    create?: Array<ProductListingCreateWithoutWishlistedByInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutWishlistedByInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutWishlistedByInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutWishlistedByInput>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;
}
