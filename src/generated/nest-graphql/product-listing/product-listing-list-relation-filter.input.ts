import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';

@InputType()
export class ProductListingListRelationFilter {

    @Field(() => ProductListingWhereInput, {nullable:true})
    every?: ProductListingWhereInput;

    @Field(() => ProductListingWhereInput, {nullable:true})
    some?: ProductListingWhereInput;

    @Field(() => ProductListingWhereInput, {nullable:true})
    none?: ProductListingWhereInput;
}
