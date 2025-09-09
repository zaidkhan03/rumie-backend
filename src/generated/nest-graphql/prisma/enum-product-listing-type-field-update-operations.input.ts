import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingType } from './product-listing-type.enum';

@InputType()
export class EnumProductListingTypeFieldUpdateOperationsInput {

    @Field(() => ProductListingType, {nullable:true})
    set?: `${ProductListingType}`;
}
