import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingCreateManyInput } from './product-listing-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductListingArgs {

    @Field(() => [ProductListingCreateManyInput], {nullable:false})
    @Type(() => ProductListingCreateManyInput)
    data!: Array<ProductListingCreateManyInput>;
}
