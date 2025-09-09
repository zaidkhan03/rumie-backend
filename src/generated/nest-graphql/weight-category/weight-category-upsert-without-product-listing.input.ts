import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeightCategoryUpdateWithoutProductListingInput } from './weight-category-update-without-product-listing.input';
import { Type } from 'class-transformer';
import { WeightCategoryCreateWithoutProductListingInput } from './weight-category-create-without-product-listing.input';
import { WeightCategoryWhereInput } from './weight-category-where.input';

@InputType()
export class WeightCategoryUpsertWithoutProductListingInput {

    @Field(() => WeightCategoryUpdateWithoutProductListingInput, {nullable:false})
    @Type(() => WeightCategoryUpdateWithoutProductListingInput)
    update!: WeightCategoryUpdateWithoutProductListingInput;

    @Field(() => WeightCategoryCreateWithoutProductListingInput, {nullable:false})
    @Type(() => WeightCategoryCreateWithoutProductListingInput)
    create!: WeightCategoryCreateWithoutProductListingInput;

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    where?: WeightCategoryWhereInput;
}
