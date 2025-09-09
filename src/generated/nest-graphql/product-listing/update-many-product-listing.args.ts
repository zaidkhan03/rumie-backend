import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingUpdateManyMutationInput } from './product-listing-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductListingWhereInput } from './product-listing-where.input';

@ArgsType()
export class UpdateManyProductListingArgs {

    @Field(() => ProductListingUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductListingUpdateManyMutationInput)
    data!: ProductListingUpdateManyMutationInput;

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;
}
