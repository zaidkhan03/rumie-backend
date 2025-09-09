import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceCreateInput } from './shopping-preference-create.input';
import { ShoppingPreferenceUpdateInput } from './shopping-preference-update.input';

@ArgsType()
export class UpsertOneShoppingPreferenceArgs {

    @Field(() => ShoppingPreferenceWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>;

    @Field(() => ShoppingPreferenceCreateInput, {nullable:false})
    @Type(() => ShoppingPreferenceCreateInput)
    create!: ShoppingPreferenceCreateInput;

    @Field(() => ShoppingPreferenceUpdateInput, {nullable:false})
    @Type(() => ShoppingPreferenceUpdateInput)
    update!: ShoppingPreferenceUpdateInput;
}
