import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateManyCategoryInput } from './product-listing-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListingCreateManyCategoryInputEnvelope {

    @Field(() => [ProductListingCreateManyCategoryInput], {nullable:false})
    @Type(() => ProductListingCreateManyCategoryInput)
    data!: Array<ProductListingCreateManyCategoryInput>;
}
