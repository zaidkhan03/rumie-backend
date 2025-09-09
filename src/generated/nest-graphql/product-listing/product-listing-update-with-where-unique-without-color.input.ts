import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutColorInput } from './product-listing-update-without-color.input';

@InputType()
export class ProductListingUpdateWithWhereUniqueWithoutColorInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateWithoutColorInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutColorInput)
    data!: ProductListingUpdateWithoutColorInput;
}
