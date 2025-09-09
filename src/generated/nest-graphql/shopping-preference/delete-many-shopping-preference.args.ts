import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceWhereInput } from './shopping-preference-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShoppingPreferenceArgs {

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    @Type(() => ShoppingPreferenceWhereInput)
    where?: ShoppingPreferenceWhereInput;
}
