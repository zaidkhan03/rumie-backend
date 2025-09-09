import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WeightCategoryWhereUniqueInput } from './weight-category-where-unique.input';
import { Type } from 'class-transformer';
import { WeightCategoryCreateWithoutProductListingInput } from './weight-category-create-without-product-listing.input';

@InputType()
export class WeightCategoryCreateOrConnectWithoutProductListingInput {

    @Field(() => WeightCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WeightCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WeightCategoryWhereUniqueInput, 'id'>;

    @Field(() => WeightCategoryCreateWithoutProductListingInput, {nullable:false})
    @Type(() => WeightCategoryCreateWithoutProductListingInput)
    create!: WeightCategoryCreateWithoutProductListingInput;
}
