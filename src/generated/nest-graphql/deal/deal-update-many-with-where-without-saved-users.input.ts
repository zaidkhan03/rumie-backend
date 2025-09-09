import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealScalarWhereInput } from './deal-scalar-where.input';
import { Type } from 'class-transformer';
import { DealUpdateManyMutationInput } from './deal-update-many-mutation.input';

@InputType()
export class DealUpdateManyWithWhereWithoutSavedUsersInput {

    @Field(() => DealScalarWhereInput, {nullable:false})
    @Type(() => DealScalarWhereInput)
    where!: DealScalarWhereInput;

    @Field(() => DealUpdateManyMutationInput, {nullable:false})
    @Type(() => DealUpdateManyMutationInput)
    data!: DealUpdateManyMutationInput;
}
