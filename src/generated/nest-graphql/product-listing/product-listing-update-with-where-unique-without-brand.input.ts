import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutBrandInput } from './product-listing-update-without-brand.input';

@InputType()
export class ProductListingUpdateWithWhereUniqueWithoutBrandInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateWithoutBrandInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutBrandInput)
    data!: ProductListingUpdateWithoutBrandInput;
}
