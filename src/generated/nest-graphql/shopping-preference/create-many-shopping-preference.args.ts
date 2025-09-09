import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceCreateManyInput } from './shopping-preference-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShoppingPreferenceArgs {

    @Field(() => [ShoppingPreferenceCreateManyInput], {nullable:false})
    @Type(() => ShoppingPreferenceCreateManyInput)
    data!: Array<ShoppingPreferenceCreateManyInput>;
}
