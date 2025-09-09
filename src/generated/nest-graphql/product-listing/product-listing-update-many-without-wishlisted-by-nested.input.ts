import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutWishlistedByInput } from './product-listing-create-without-wishlisted-by.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutWishlistedByInput } from './product-listing-create-or-connect-without-wishlisted-by.input';
import { ProductListingUpsertWithWhereUniqueWithoutWishlistedByInput } from './product-listing-upsert-with-where-unique-without-wishlisted-by.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateWithWhereUniqueWithoutWishlistedByInput } from './product-listing-update-with-where-unique-without-wishlisted-by.input';
import { ProductListingUpdateManyWithWhereWithoutWishlistedByInput } from './product-listing-update-many-with-where-without-wishlisted-by.input';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';

@InputType()
export class ProductListingUpdateManyWithoutWishlistedByNestedInput {

    @Field(() => [ProductListingCreateWithoutWishlistedByInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutWishlistedByInput)
    create?: Array<ProductListingCreateWithoutWishlistedByInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutWishlistedByInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutWishlistedByInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutWishlistedByInput>;

    @Field(() => [ProductListingUpsertWithWhereUniqueWithoutWishlistedByInput], {nullable:true})
    @Type(() => ProductListingUpsertWithWhereUniqueWithoutWishlistedByInput)
    upsert?: Array<ProductListingUpsertWithWhereUniqueWithoutWishlistedByInput>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingUpdateWithWhereUniqueWithoutWishlistedByInput], {nullable:true})
    @Type(() => ProductListingUpdateWithWhereUniqueWithoutWishlistedByInput)
    update?: Array<ProductListingUpdateWithWhereUniqueWithoutWishlistedByInput>;

    @Field(() => [ProductListingUpdateManyWithWhereWithoutWishlistedByInput], {nullable:true})
    @Type(() => ProductListingUpdateManyWithWhereWithoutWishlistedByInput)
    updateMany?: Array<ProductListingUpdateManyWithWhereWithoutWishlistedByInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    @Type(() => ProductListingScalarWhereInput)
    deleteMany?: Array<ProductListingScalarWhereInput>;
}
