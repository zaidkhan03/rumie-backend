import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutBrandInput } from './product-listing-create-without-brand.input';

@InputType()
export class ProductListingCreateOrConnectWithoutBrandInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutBrandInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutBrandInput)
    create!: ProductListingCreateWithoutBrandInput;
}
