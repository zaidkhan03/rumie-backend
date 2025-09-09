import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductListingsInput } from './product-category-create-without-product-listings.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutProductListingsInput } from './product-category-create-or-connect-without-product-listings.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedOneWithoutProductListingsInput {

    @Field(() => ProductCategoryCreateWithoutProductListingsInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductListingsInput)
    create?: ProductCategoryCreateWithoutProductListingsInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutProductListingsInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductListingsInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductListingsInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
