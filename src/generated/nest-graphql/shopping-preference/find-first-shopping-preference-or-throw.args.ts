import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceWhereInput } from './shopping-preference-where.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceOrderByWithRelationInput } from './shopping-preference-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShoppingPreferenceScalarFieldEnum } from './shopping-preference-scalar-field.enum';

@ArgsType()
export class FindFirstShoppingPreferenceOrThrowArgs {

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    @Type(() => ShoppingPreferenceWhereInput)
    where?: ShoppingPreferenceWhereInput;

    @Field(() => [ShoppingPreferenceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShoppingPreferenceOrderByWithRelationInput>;

    @Field(() => ShoppingPreferenceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShoppingPreferenceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ShoppingPreferenceScalarFieldEnum}`>;
}
