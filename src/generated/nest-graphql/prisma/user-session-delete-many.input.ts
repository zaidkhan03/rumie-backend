import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSessionWhereInput } from '../user-session/user-session-where.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSessionDeleteManyInput {

    @Field(() => UserSessionWhereInput, {nullable:false})
    @Type(() => UserSessionWhereInput)
    where!: UserSessionWhereInput;
}
