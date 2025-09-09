import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingUncheckedCreateNestedManyWithoutBrandInput } from '../product-listing/product-listing-unchecked-create-nested-many-without-brand.input';

@InputType()
export class BrandUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    featured?: boolean;

    @Field(() => ProductListingUncheckedCreateNestedManyWithoutBrandInput, {nullable:true})
    ProductListing?: ProductListingUncheckedCreateNestedManyWithoutBrandInput;
}
