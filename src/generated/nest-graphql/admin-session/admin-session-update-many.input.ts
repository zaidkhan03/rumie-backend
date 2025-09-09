import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminSessionWhereInput } from './admin-session-where.input';
import { Type } from 'class-transformer';
import { AdminSessionUpdateInput } from './admin-session-update.input';

@InputType()
export class AdminSessionUpdateManyInput {

    @Field(() => AdminSessionWhereInput, {nullable:false})
    @Type(() => AdminSessionWhereInput)
    where!: AdminSessionWhereInput;

    @Field(() => AdminSessionUpdateInput, {nullable:false})
    @Type(() => AdminSessionUpdateInput)
    data!: AdminSessionUpdateInput;
}
