import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingCreateInput } from './product-listing-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductListingArgs {

    @Field(() => ProductListingCreateInput, {nullable:false})
    @Type(() => ProductListingCreateInput)
    data!: ProductListingCreateInput;
}
