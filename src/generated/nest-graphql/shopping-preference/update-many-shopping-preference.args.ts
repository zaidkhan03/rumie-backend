import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceUpdateManyMutationInput } from './shopping-preference-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceWhereInput } from './shopping-preference-where.input';

@ArgsType()
export class UpdateManyShoppingPreferenceArgs {

    @Field(() => ShoppingPreferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingPreferenceUpdateManyMutationInput)
    data!: ShoppingPreferenceUpdateManyMutationInput;

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    @Type(() => ShoppingPreferenceWhereInput)
    where?: ShoppingPreferenceWhereInput;
}
