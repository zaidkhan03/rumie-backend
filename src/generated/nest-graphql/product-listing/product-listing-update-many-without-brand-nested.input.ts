import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutBrandInput } from './product-listing-create-without-brand.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutBrandInput } from './product-listing-create-or-connect-without-brand.input';
import { ProductListingUpsertWithWhereUniqueWithoutBrandInput } from './product-listing-upsert-with-where-unique-without-brand.input';
import { ProductListingCreateManyBrandInputEnvelope } from './product-listing-create-many-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateWithWhereUniqueWithoutBrandInput } from './product-listing-update-with-where-unique-without-brand.input';
import { ProductListingUpdateManyWithWhereWithoutBrandInput } from './product-listing-update-many-with-where-without-brand.input';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';

@InputType()
export class ProductListingUpdateManyWithoutBrandNestedInput {

    @Field(() => [ProductListingCreateWithoutBrandInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutBrandInput)
    create?: Array<ProductListingCreateWithoutBrandInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutBrandInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutBrandInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutBrandInput>;

    @Field(() => [ProductListingUpsertWithWhereUniqueWithoutBrandInput], {nullable:true})
    @Type(() => ProductListingUpsertWithWhereUniqueWithoutBrandInput)
    upsert?: Array<ProductListingUpsertWithWhereUniqueWithoutBrandInput>;

    @Field(() => ProductListingCreateManyBrandInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyBrandInputEnvelope)
    createMany?: ProductListingCreateManyBrandInputEnvelope;

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

    @Field(() => [ProductListingUpdateWithWhereUniqueWithoutBrandInput], {nullable:true})
    @Type(() => ProductListingUpdateWithWhereUniqueWithoutBrandInput)
    update?: Array<ProductListingUpdateWithWhereUniqueWithoutBrandInput>;

    @Field(() => [ProductListingUpdateManyWithWhereWithoutBrandInput], {nullable:true})
    @Type(() => ProductListingUpdateManyWithWhereWithoutBrandInput)
    updateMany?: Array<ProductListingUpdateManyWithWhereWithoutBrandInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    @Type(() => ProductListingScalarWhereInput)
    deleteMany?: Array<ProductListingScalarWhereInput>;
}
