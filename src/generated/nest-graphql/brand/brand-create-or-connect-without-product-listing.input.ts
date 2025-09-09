import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';
import { BrandCreateWithoutProductListingInput } from './brand-create-without-product-listing.input';

@InputType()
export class BrandCreateOrConnectWithoutProductListingInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandCreateWithoutProductListingInput, {nullable:false})
    @Type(() => BrandCreateWithoutProductListingInput)
    create!: BrandCreateWithoutProductListingInput;
}
