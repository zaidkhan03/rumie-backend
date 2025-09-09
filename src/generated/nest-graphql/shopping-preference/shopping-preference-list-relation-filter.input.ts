import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingPreferenceWhereInput } from './shopping-preference-where.input';

@InputType()
export class ShoppingPreferenceListRelationFilter {

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    every?: ShoppingPreferenceWhereInput;

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    some?: ShoppingPreferenceWhereInput;

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    none?: ShoppingPreferenceWhereInput;
}
