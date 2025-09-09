import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateManyMutationInput } from './product-listing-update-many-mutation.input';

@InputType()
export class ProductListingUpdateManyWithWhereWithoutWeightCategoryInput {

    @Field(() => ProductListingScalarWhereInput, {nullable:false})
    @Type(() => ProductListingScalarWhereInput)
    where!: ProductListingScalarWhereInput;

    @Field(() => ProductListingUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductListingUpdateManyMutationInput)
    data!: ProductListingUpdateManyMutationInput;
}
