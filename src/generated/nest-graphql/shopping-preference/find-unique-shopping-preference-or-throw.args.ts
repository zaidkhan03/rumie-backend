import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueShoppingPreferenceOrThrowArgs {

    @Field(() => ShoppingPreferenceWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>;
}
