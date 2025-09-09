import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyCreateInput } from './hobby-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHobbyArgs {

    @Field(() => HobbyCreateInput, {nullable:false})
    @Type(() => HobbyCreateInput)
    data!: HobbyCreateInput;
}
