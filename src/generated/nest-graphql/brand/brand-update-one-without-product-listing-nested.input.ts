import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutProductListingInput } from './brand-create-without-product-listing.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutProductListingInput } from './brand-create-or-connect-without-product-listing.input';
import { BrandUpsertWithoutProductListingInput } from './brand-upsert-without-product-listing.input';
import { BrandWhereInput } from './brand-where.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandUpdateToOneWithWhereWithoutProductListingInput } from './brand-update-to-one-with-where-without-product-listing.input';

@InputType()
export class BrandUpdateOneWithoutProductListingNestedInput {

    @Field(() => BrandCreateWithoutProductListingInput, {nullable:true})
    @Type(() => BrandCreateWithoutProductListingInput)
    create?: BrandCreateWithoutProductListingInput;

    @Field(() => BrandCreateOrConnectWithoutProductListingInput, {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutProductListingInput)
    connectOrCreate?: BrandCreateOrConnectWithoutProductListingInput;

    @Field(() => BrandUpsertWithoutProductListingInput, {nullable:true})
    @Type(() => BrandUpsertWithoutProductListingInput)
    upsert?: BrandUpsertWithoutProductListingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    delete?: BrandWhereInput;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandUpdateToOneWithWhereWithoutProductListingInput, {nullable:true})
    @Type(() => BrandUpdateToOneWithWhereWithoutProductListingInput)
    update?: BrandUpdateToOneWithWhereWithoutProductListingInput;
}
