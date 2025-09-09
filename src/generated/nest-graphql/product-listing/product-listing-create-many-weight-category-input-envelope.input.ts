import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateManyWeightCategoryInput } from './product-listing-create-many-weight-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListingCreateManyWeightCategoryInputEnvelope {

    @Field(() => [ProductListingCreateManyWeightCategoryInput], {nullable:false})
    @Type(() => ProductListingCreateManyWeightCategoryInput)
    data!: Array<ProductListingCreateManyWeightCategoryInput>;
}
