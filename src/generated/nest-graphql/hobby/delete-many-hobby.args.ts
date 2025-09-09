import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyWhereInput } from './hobby-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHobbyArgs {

    @Field(() => HobbyWhereInput, {nullable:true})
    @Type(() => HobbyWhereInput)
    where?: HobbyWhereInput;
}
