import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSessionWhereInput } from './user-session-where.input';
import { Type } from 'class-transformer';
import { UserSessionUpdateInput } from './user-session-update.input';

@InputType()
export class UserSessionUpdateManyInput {

    @Field(() => UserSessionWhereInput, {nullable:false})
    @Type(() => UserSessionWhereInput)
    where!: UserSessionWhereInput;

    @Field(() => UserSessionUpdateInput, {nullable:false})
    @Type(() => UserSessionUpdateInput)
    data!: UserSessionUpdateInput;
}
