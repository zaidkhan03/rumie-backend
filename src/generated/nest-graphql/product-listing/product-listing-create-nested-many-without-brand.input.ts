import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutBrandInput } from './product-listing-create-without-brand.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutBrandInput } from './product-listing-create-or-connect-without-brand.input';
import { ProductListingCreateManyBrandInputEnvelope } from './product-listing-create-many-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedManyWithoutBrandInput {

    @Field(() => [ProductListingCreateWithoutBrandInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutBrandInput)
    create?: Array<ProductListingCreateWithoutBrandInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutBrandInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutBrandInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutBrandInput>;

    @Field(() => ProductListingCreateManyBrandInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyBrandInputEnvelope)
    createMany?: ProductListingCreateManyBrandInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;
}
