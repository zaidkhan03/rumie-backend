import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminSessionWhereInput } from '../admin-session/admin-session-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminSessionDeleteManyInput {

    @Field(() => AdminSessionWhereInput, {nullable:false})
    @Type(() => AdminSessionWhereInput)
    where!: AdminSessionWhereInput;
}
