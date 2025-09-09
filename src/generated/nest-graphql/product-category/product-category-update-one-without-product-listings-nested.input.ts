import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductListingsInput } from './product-category-create-without-product-listings.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutProductListingsInput } from './product-category-create-or-connect-without-product-listings.input';
import { ProductCategoryUpsertWithoutProductListingsInput } from './product-category-upsert-without-product-listings.input';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateToOneWithWhereWithoutProductListingsInput } from './product-category-update-to-one-with-where-without-product-listings.input';

@InputType()
export class ProductCategoryUpdateOneWithoutProductListingsNestedInput {

    @Field(() => ProductCategoryCreateWithoutProductListingsInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductListingsInput)
    create?: ProductCategoryCreateWithoutProductListingsInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutProductListingsInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductListingsInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductListingsInput;

    @Field(() => ProductCategoryUpsertWithoutProductListingsInput, {nullable:true})
    @Type(() => ProductCategoryUpsertWithoutProductListingsInput)
    upsert?: ProductCategoryUpsertWithoutProductListingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    delete?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryUpdateToOneWithWhereWithoutProductListingsInput, {nullable:true})
    @Type(() => ProductCategoryUpdateToOneWithWhereWithoutProductListingsInput)
    update?: ProductCategoryUpdateToOneWithWhereWithoutProductListingsInput;
}
