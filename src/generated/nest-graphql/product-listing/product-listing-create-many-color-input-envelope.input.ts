import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateManyColorInput } from './product-listing-create-many-color.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListingCreateManyColorInputEnvelope {

    @Field(() => [ProductListingCreateManyColorInput], {nullable:false})
    @Type(() => ProductListingCreateManyColorInput)
    data!: Array<ProductListingCreateManyColorInput>;
}
