import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateNestedManyWithoutColorInput } from '../product-listing/product-listing-create-nested-many-without-color.input';

@InputType()
export class ColorCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    hex!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductListingCreateNestedManyWithoutColorInput, {nullable:true})
    ProductListing?: ProductListingCreateNestedManyWithoutColorInput;
}
