import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceUpdateInput } from './shopping-preference-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';

@ArgsType()
export class UpdateOneShoppingPreferenceArgs {

    @Field(() => ShoppingPreferenceUpdateInput, {nullable:false})
    @Type(() => ShoppingPreferenceUpdateInput)
    data!: ShoppingPreferenceUpdateInput;

    @Field(() => ShoppingPreferenceWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>;
}
