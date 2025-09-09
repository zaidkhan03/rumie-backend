import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutShoppingPreferencesInput } from '../user/user-create-nested-many-without-shopping-preferences.input';

@InputType()
export class ShoppingPreferenceCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutShoppingPreferencesInput, {nullable:true})
    users?: UserCreateNestedManyWithoutShoppingPreferencesInput;
}
