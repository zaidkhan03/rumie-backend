import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeightCategoryCreateWithoutProductListingInput } from './weight-category-create-without-product-listing.input';
import { Type } from 'class-transformer';
import { WeightCategoryCreateOrConnectWithoutProductListingInput } from './weight-category-create-or-connect-without-product-listing.input';
import { WeightCategoryUpsertWithoutProductListingInput } from './weight-category-upsert-without-product-listing.input';
import { WeightCategoryWhereInput } from './weight-category-where.input';
import { Prisma } from '@prisma/client';
import { WeightCategoryWhereUniqueInput } from './weight-category-where-unique.input';
import { WeightCategoryUpdateToOneWithWhereWithoutProductListingInput } from './weight-category-update-to-one-with-where-without-product-listing.input';

@InputType()
export class WeightCategoryUpdateOneWithoutProductListingNestedInput {

    @Field(() => WeightCategoryCreateWithoutProductListingInput, {nullable:true})
    @Type(() => WeightCategoryCreateWithoutProductListingInput)
    create?: WeightCategoryCreateWithoutProductListingInput;

    @Field(() => WeightCategoryCreateOrConnectWithoutProductListingInput, {nullable:true})
    @Type(() => WeightCategoryCreateOrConnectWithoutProductListingInput)
    connectOrCreate?: WeightCategoryCreateOrConnectWithoutProductListingInput;

    @Field(() => WeightCategoryUpsertWithoutProductListingInput, {nullable:true})
    @Type(() => WeightCategoryUpsertWithoutProductListingInput)
    upsert?: WeightCategoryUpsertWithoutProductListingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    delete?: WeightCategoryWhereInput;

    @Field(() => WeightCategoryWhereUniqueInput, {nullable:true})
    @Type(() => WeightCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<WeightCategoryWhereUniqueInput, 'id'>;

    @Field(() => WeightCategoryUpdateToOneWithWhereWithoutProductListingInput, {nullable:true})
    @Type(() => WeightCategoryUpdateToOneWithWhereWithoutProductListingInput)
    update?: WeightCategoryUpdateToOneWithWhereWithoutProductListingInput;
}
