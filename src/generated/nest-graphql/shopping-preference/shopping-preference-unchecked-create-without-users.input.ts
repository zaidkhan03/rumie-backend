import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingPreferenceCreateuserIdsInput } from './shopping-preference-createuser-ids.input';

@InputType()
export class ShoppingPreferenceUncheckedCreateWithoutUsersInput {

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
}
