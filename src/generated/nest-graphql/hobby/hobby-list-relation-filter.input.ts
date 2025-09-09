import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HobbyWhereInput } from './hobby-where.input';

@InputType()
export class HobbyListRelationFilter {

    @Field(() => HobbyWhereInput, {nullable:true})
    every?: HobbyWhereInput;

    @Field(() => HobbyWhereInput, {nullable:true})
    some?: HobbyWhereInput;

    @Field(() => HobbyWhereInput, {nullable:true})
    none?: HobbyWhereInput;
}
