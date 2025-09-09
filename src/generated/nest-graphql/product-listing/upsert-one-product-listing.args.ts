import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateInput } from './product-listing-create.input';
import { ProductListingUpdateInput } from './product-listing-update.input';

@ArgsType()
export class UpsertOneProductListingArgs {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateInput, {nullable:false})
    @Type(() => ProductListingCreateInput)
    create!: ProductListingCreateInput;

    @Field(() => ProductListingUpdateInput, {nullable:false})
    @Type(() => ProductListingUpdateInput)
    update!: ProductListingUpdateInput;
}
