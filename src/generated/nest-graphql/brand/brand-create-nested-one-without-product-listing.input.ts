import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutProductListingInput } from './brand-create-without-product-listing.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutProductListingInput } from './brand-create-or-connect-without-product-listing.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@InputType()
export class BrandCreateNestedOneWithoutProductListingInput {

    @Field(() => BrandCreateWithoutProductListingInput, {nullable:true})
    @Type(() => BrandCreateWithoutProductListingInput)
    create?: BrandCreateWithoutProductListingInput;

    @Field(() => BrandCreateOrConnectWithoutProductListingInput, {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutProductListingInput)
    connectOrCreate?: BrandCreateOrConnectWithoutProductListingInput;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;
}
