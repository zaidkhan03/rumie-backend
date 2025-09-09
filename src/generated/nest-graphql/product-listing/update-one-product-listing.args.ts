import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingUpdateInput } from './product-listing-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@ArgsType()
export class UpdateOneProductListingArgs {

    @Field(() => ProductListingUpdateInput, {nullable:false})
    @Type(() => ProductListingUpdateInput)
    data!: ProductListingUpdateInput;

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;
}
