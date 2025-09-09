import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminSessionObjectEqualityInput } from './admin-session-object-equality.input';
import { AdminSessionWhereInput } from '../admin-session/admin-session-where.input';

@InputType()
export class AdminSessionCompositeListFilter {

    @Field(() => [AdminSessionObjectEqualityInput], {nullable:true})
    equals?: Array<AdminSessionObjectEqualityInput>;

    @Field(() => AdminSessionWhereInput, {nullable:true})
    every?: AdminSessionWhereInput;

    @Field(() => AdminSessionWhereInput, {nullable:true})
    some?: AdminSessionWhereInput;

    @Field(() => AdminSessionWhereInput, {nullable:true})
    none?: AdminSessionWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
