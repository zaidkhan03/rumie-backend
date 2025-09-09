import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUpdateWithoutProductListingsInput } from './product-category-update-without-product-listings.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutProductListingsInput } from './product-category-create-without-product-listings.input';
import { ProductCategoryWhereInput } from './product-category-where.input';

@InputType()
export class ProductCategoryUpsertWithoutProductListingsInput {

    @Field(() => ProductCategoryUpdateWithoutProductListingsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductListingsInput)
    update!: ProductCategoryUpdateWithoutProductListingsInput;

    @Field(() => ProductCategoryCreateWithoutProductListingsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductListingsInput)
    create!: ProductCategoryCreateWithoutProductListingsInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;
}
