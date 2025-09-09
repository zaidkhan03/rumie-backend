import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HobbyCreateuserIdsInput } from './hobby-createuser-ids.input';
import { UserUncheckedCreateNestedManyWithoutHobbiesInput } from '../user/user-unchecked-create-nested-many-without-hobbies.input';

@InputType()
export class HobbyUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => HobbyCreateuserIdsInput, {nullable:true})
    userIds?: HobbyCreateuserIdsInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutHobbiesInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutHobbiesInput;
}
