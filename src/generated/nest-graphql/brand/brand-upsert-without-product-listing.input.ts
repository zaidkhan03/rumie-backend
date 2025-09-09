import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandUpdateWithoutProductListingInput } from './brand-update-without-product-listing.input';
import { Type } from 'class-transformer';
import { BrandCreateWithoutProductListingInput } from './brand-create-without-product-listing.input';
import { BrandWhereInput } from './brand-where.input';

@InputType()
export class BrandUpsertWithoutProductListingInput {

    @Field(() => BrandUpdateWithoutProductListingInput, {nullable:false})
    @Type(() => BrandUpdateWithoutProductListingInput)
    update!: BrandUpdateWithoutProductListingInput;

    @Field(() => BrandCreateWithoutProductListingInput, {nullable:false})
    @Type(() => BrandCreateWithoutProductListingInput)
    create!: BrandCreateWithoutProductListingInput;

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;
}
