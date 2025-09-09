import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';
import { Type } from 'class-transformer';
import { ProductListingOrderByWithRelationInput } from './product-listing-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductListingScalarFieldEnum } from './product-listing-scalar-field.enum';

@ArgsType()
export class FindFirstProductListingOrThrowArgs {

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;

    @Field(() => [ProductListingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductListingOrderByWithRelationInput>;

    @Field(() => ProductListingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductListingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductListingScalarFieldEnum}`>;
}
