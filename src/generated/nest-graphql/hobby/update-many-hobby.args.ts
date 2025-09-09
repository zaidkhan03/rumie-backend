import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyUpdateManyMutationInput } from './hobby-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HobbyWhereInput } from './hobby-where.input';

@ArgsType()
export class UpdateManyHobbyArgs {

    @Field(() => HobbyUpdateManyMutationInput, {nullable:false})
    @Type(() => HobbyUpdateManyMutationInput)
    data!: HobbyUpdateManyMutationInput;

    @Field(() => HobbyWhereInput, {nullable:true})
    @Type(() => HobbyWhereInput)
    where?: HobbyWhereInput;
}
