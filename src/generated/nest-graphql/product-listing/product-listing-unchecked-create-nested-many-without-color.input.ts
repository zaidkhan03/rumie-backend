import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutColorInput } from './product-listing-create-without-color.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutColorInput } from './product-listing-create-or-connect-without-color.input';
import { ProductListingCreateManyColorInputEnvelope } from './product-listing-create-many-color-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingUncheckedCreateNestedManyWithoutColorInput {

    @Field(() => [ProductListingCreateWithoutColorInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutColorInput)
    create?: Array<ProductListingCreateWithoutColorInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutColorInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutColorInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutColorInput>;

    @Field(() => ProductListingCreateManyColorInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyColorInputEnvelope)
    createMany?: ProductListingCreateManyColorInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;
}
