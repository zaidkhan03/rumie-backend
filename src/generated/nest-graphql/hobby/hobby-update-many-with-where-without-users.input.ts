import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HobbyScalarWhereInput } from './hobby-scalar-where.input';
import { Type } from 'class-transformer';
import { HobbyUpdateManyMutationInput } from './hobby-update-many-mutation.input';

@InputType()
export class HobbyUpdateManyWithWhereWithoutUsersInput {

    @Field(() => HobbyScalarWhereInput, {nullable:false})
    @Type(() => HobbyScalarWhereInput)
    where!: HobbyScalarWhereInput;

    @Field(() => HobbyUpdateManyMutationInput, {nullable:false})
    @Type(() => HobbyUpdateManyMutationInput)
    data!: HobbyUpdateManyMutationInput;
}
