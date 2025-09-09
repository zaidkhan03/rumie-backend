import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';

@InputType()
export class ProductListingRelationFilter {

    @Field(() => ProductListingWhereInput, {nullable:true})
    is?: ProductListingWhereInput;

    @Field(() => ProductListingWhereInput, {nullable:true})
    isNot?: ProductListingWhereInput;
}
