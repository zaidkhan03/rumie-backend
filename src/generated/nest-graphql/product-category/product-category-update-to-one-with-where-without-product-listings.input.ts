import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutProductListingsInput } from './product-category-update-without-product-listings.input';

@InputType()
export class ProductCategoryUpdateToOneWithWhereWithoutProductListingsInput {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryUpdateWithoutProductListingsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductListingsInput)
    data!: ProductCategoryUpdateWithoutProductListingsInput;
}
