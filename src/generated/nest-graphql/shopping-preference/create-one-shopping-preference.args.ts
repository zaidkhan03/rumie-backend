import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceCreateInput } from './shopping-preference-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShoppingPreferenceArgs {

    @Field(() => ShoppingPreferenceCreateInput, {nullable:false})
    @Type(() => ShoppingPreferenceCreateInput)
    data!: ShoppingPreferenceCreateInput;
}
