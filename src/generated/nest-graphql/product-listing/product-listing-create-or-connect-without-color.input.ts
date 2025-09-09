import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutColorInput } from './product-listing-create-without-color.input';

@InputType()
export class ProductListingCreateOrConnectWithoutColorInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutColorInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutColorInput)
    create!: ProductListingCreateWithoutColorInput;
}
