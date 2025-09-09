import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeightCategoryWhereInput } from './weight-category-where.input';
import { Type } from 'class-transformer';
import { WeightCategoryUpdateWithoutProductListingInput } from './weight-category-update-without-product-listing.input';

@InputType()
export class WeightCategoryUpdateToOneWithWhereWithoutProductListingInput {

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    where?: WeightCategoryWhereInput;

    @Field(() => WeightCategoryUpdateWithoutProductListingInput, {nullable:false})
    @Type(() => WeightCategoryUpdateWithoutProductListingInput)
    data!: WeightCategoryUpdateWithoutProductListingInput;
}
