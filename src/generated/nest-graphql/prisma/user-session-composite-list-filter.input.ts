import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSessionObjectEqualityInput } from './user-session-object-equality.input';
import { UserSessionWhereInput } from '../user-session/user-session-where.input';

@InputType()
export class UserSessionCompositeListFilter {

    @Field(() => [UserSessionObjectEqualityInput], {nullable:true})
    equals?: Array<UserSessionObjectEqualityInput>;

    @Field(() => UserSessionWhereInput, {nullable:true})
    every?: UserSessionWhereInput;

    @Field(() => UserSessionWhereInput, {nullable:true})
    some?: UserSessionWhereInput;

    @Field(() => UserSessionWhereInput, {nullable:true})
    none?: UserSessionWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
