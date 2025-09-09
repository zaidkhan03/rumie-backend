import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { Type } from 'class-transformer';
import { BrandUpdateWithoutProductListingInput } from './brand-update-without-product-listing.input';

@InputType()
export class BrandUpdateToOneWithWhereWithoutProductListingInput {

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;

    @Field(() => BrandUpdateWithoutProductListingInput, {nullable:false})
    @Type(() => BrandUpdateWithoutProductListingInput)
    data!: BrandUpdateWithoutProductListingInput;
}
