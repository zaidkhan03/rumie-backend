import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingPreferenceScalarWhereInput } from './shopping-preference-scalar-where.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceUpdateManyMutationInput } from './shopping-preference-update-many-mutation.input';

@InputType()
export class ShoppingPreferenceUpdateManyWithWhereWithoutUsersInput {

    @Field(() => ShoppingPreferenceScalarWhereInput, {nullable:false})
    @Type(() => ShoppingPreferenceScalarWhereInput)
    where!: ShoppingPreferenceScalarWhereInput;

    @Field(() => ShoppingPreferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingPreferenceUpdateManyMutationInput)
    data!: ShoppingPreferenceUpdateManyMutationInput;
}
