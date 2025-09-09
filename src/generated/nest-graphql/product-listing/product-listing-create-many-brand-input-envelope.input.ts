import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateManyBrandInput } from './product-listing-create-many-brand.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListingCreateManyBrandInputEnvelope {

    @Field(() => [ProductListingCreateManyBrandInput], {nullable:false})
    @Type(() => ProductListingCreateManyBrandInput)
    data!: Array<ProductListingCreateManyBrandInput>;
}
