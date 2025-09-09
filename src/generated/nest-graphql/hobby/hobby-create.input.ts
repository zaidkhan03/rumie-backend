import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutHobbiesInput } from '../user/user-create-nested-many-without-hobbies.input';

@InputType()
export class HobbyCreateInput {

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

    @Field(() => UserCreateNestedManyWithoutHobbiesInput, {nullable:true})
    users?: UserCreateNestedManyWithoutHobbiesInput;
}
