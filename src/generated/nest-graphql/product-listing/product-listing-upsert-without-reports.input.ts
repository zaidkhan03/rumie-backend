import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingUpdateWithoutReportsInput } from './product-listing-update-without-reports.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutReportsInput } from './product-listing-create-without-reports.input';
import { ProductListingWhereInput } from './product-listing-where.input';

@InputType()
export class ProductListingUpsertWithoutReportsInput {

    @Field(() => ProductListingUpdateWithoutReportsInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutReportsInput)
    update!: ProductListingUpdateWithoutReportsInput;

    @Field(() => ProductListingCreateWithoutReportsInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutReportsInput)
    create!: ProductListingCreateWithoutReportsInput;

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;
}
