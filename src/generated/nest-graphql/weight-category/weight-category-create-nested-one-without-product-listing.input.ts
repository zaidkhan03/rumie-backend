import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeightCategoryCreateWithoutProductListingInput } from './weight-category-create-without-product-listing.input';
import { Type } from 'class-transformer';
import { WeightCategoryCreateOrConnectWithoutProductListingInput } from './weight-category-create-or-connect-without-product-listing.input';
import { Prisma } from '@prisma/client';
import { WeightCategoryWhereUniqueInput } from './weight-category-where-unique.input';

@InputType()
export class WeightCategoryCreateNestedOneWithoutProductListingInput {

    @Field(() => WeightCategoryCreateWithoutProductListingInput, {nullable:true})
    @Type(() => WeightCategoryCreateWithoutProductListingInput)
    create?: WeightCategoryCreateWithoutProductListingInput;

    @Field(() => WeightCategoryCreateOrConnectWithoutProductListingInput, {nullable:true})
    @Type(() => WeightCategoryCreateOrConnectWithoutProductListingInput)
    connectOrCreate?: WeightCategoryCreateOrConnectWithoutProductListingInput;

    @Field(() => WeightCategoryWhereUniqueInput, {nullable:true})
    @Type(() => WeightCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<WeightCategoryWhereUniqueInput, 'id'>;
}
