import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingPreferenceCreateuserIdsInput } from './shopping-preference-createuser-ids.input';
import { UserUncheckedCreateNestedManyWithoutShoppingPreferencesInput } from '../user/user-unchecked-create-nested-many-without-shopping-preferences.input';

@InputType()
export class ShoppingPreferenceUncheckedCreateInput {

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

    @Field(() => ShoppingPreferenceCreateuserIdsInput, {nullable:true})
    userIds?: ShoppingPreferenceCreateuserIdsInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutShoppingPreferencesInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutShoppingPreferencesInput;
}
