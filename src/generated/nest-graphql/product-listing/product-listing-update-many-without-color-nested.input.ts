import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutColorInput } from './product-listing-create-without-color.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutColorInput } from './product-listing-create-or-connect-without-color.input';
import { ProductListingUpsertWithWhereUniqueWithoutColorInput } from './product-listing-upsert-with-where-unique-without-color.input';
import { ProductListingCreateManyColorInputEnvelope } from './product-listing-create-many-color-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateWithWhereUniqueWithoutColorInput } from './product-listing-update-with-where-unique-without-color.input';
import { ProductListingUpdateManyWithWhereWithoutColorInput } from './product-listing-update-many-with-where-without-color.input';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';

@InputType()
export class ProductListingUpdateManyWithoutColorNestedInput {

    @Field(() => [ProductListingCreateWithoutColorInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutColorInput)
    create?: Array<ProductListingCreateWithoutColorInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutColorInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutColorInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutColorInput>;

    @Field(() => [ProductListingUpsertWithWhereUniqueWithoutColorInput], {nullable:true})
    @Type(() => ProductListingUpsertWithWhereUniqueWithoutColorInput)
    upsert?: Array<ProductListingUpsertWithWhereUniqueWithoutColorInput>;

    @Field(() => ProductListingCreateManyColorInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyColorInputEnvelope)
    createMany?: ProductListingCreateManyColorInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingUpdateWithWhereUniqueWithoutColorInput], {nullable:true})
    @Type(() => ProductListingUpdateWithWhereUniqueWithoutColorInput)
    update?: Array<ProductListingUpdateWithWhereUniqueWithoutColorInput>;

    @Field(() => [ProductListingUpdateManyWithWhereWithoutColorInput], {nullable:true})
    @Type(() => ProductListingUpdateManyWithWhereWithoutColorInput)
    updateMany?: Array<ProductListingUpdateManyWithWhereWithoutColorInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    @Type(() => ProductListingScalarWhereInput)
    deleteMany?: Array<ProductListingScalarWhereInput>;
}
