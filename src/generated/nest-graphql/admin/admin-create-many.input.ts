import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreaterolesInput } from './admin-createroles.input';
import { AdminSessionCreateInput } from '../admin-session/admin-session-create.input';

@InputType()
export class AdminCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    countryCode!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => AdminCreaterolesInput, {nullable:true})
    roles?: AdminCreaterolesInput;

    @Field(() => [AdminSessionCreateInput], {nullable:true})
    sessions?: Array<AdminSessionCreateInput>;
}
