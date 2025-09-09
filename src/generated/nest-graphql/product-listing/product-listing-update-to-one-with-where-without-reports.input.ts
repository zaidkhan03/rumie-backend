import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutReportsInput } from './product-listing-update-without-reports.input';

@InputType()
export class ProductListingUpdateToOneWithWhereWithoutReportsInput {

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;

    @Field(() => ProductListingUpdateWithoutReportsInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutReportsInput)
    data!: ProductListingUpdateWithoutReportsInput;
}
