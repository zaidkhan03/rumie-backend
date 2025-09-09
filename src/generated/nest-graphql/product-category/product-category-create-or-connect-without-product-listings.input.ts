import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutProductListingsInput } from './product-category-create-without-product-listings.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutProductListingsInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryCreateWithoutProductListingsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductListingsInput)
    create!: ProductCategoryCreateWithoutProductListingsInput;
}
