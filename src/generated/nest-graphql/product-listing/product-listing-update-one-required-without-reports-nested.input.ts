import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutReportsInput } from './product-listing-create-without-reports.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutReportsInput } from './product-listing-create-or-connect-without-reports.input';
import { ProductListingUpsertWithoutReportsInput } from './product-listing-upsert-without-reports.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateToOneWithWhereWithoutReportsInput } from './product-listing-update-to-one-with-where-without-reports.input';

@InputType()
export class ProductListingUpdateOneRequiredWithoutReportsNestedInput {

    @Field(() => ProductListingCreateWithoutReportsInput, {nullable:true})
    @Type(() => ProductListingCreateWithoutReportsInput)
    create?: ProductListingCreateWithoutReportsInput;

    @Field(() => ProductListingCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutReportsInput)
    connectOrCreate?: ProductListingCreateOrConnectWithoutReportsInput;

    @Field(() => ProductListingUpsertWithoutReportsInput, {nullable:true})
    @Type(() => ProductListingUpsertWithoutReportsInput)
    upsert?: ProductListingUpsertWithoutReportsInput;

    @Field(() => ProductListingWhereUniqueInput, {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateToOneWithWhereWithoutReportsInput, {nullable:true})
    @Type(() => ProductListingUpdateToOneWithWhereWithoutReportsInput)
    update?: ProductListingUpdateToOneWithWhereWithoutReportsInput;
}
