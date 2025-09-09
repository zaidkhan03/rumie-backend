import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutReportsInput } from './product-listing-create-without-reports.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutReportsInput } from './product-listing-create-or-connect-without-reports.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedOneWithoutReportsInput {

    @Field(() => ProductListingCreateWithoutReportsInput, {nullable:true})
    @Type(() => ProductListingCreateWithoutReportsInput)
    create?: ProductListingCreateWithoutReportsInput;

    @Field(() => ProductListingCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutReportsInput)
    connectOrCreate?: ProductListingCreateOrConnectWithoutReportsInput;

    @Field(() => ProductListingWhereUniqueInput, {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;
}
