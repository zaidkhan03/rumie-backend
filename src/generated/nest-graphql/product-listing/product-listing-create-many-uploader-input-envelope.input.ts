import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateManyUploaderInput } from './product-listing-create-many-uploader.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListingCreateManyUploaderInputEnvelope {

    @Field(() => [ProductListingCreateManyUploaderInput], {nullable:false})
    @Type(() => ProductListingCreateManyUploaderInput)
    data!: Array<ProductListingCreateManyUploaderInput>;
}
