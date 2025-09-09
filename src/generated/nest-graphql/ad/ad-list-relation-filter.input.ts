import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereInput } from './ad-where.input';

@InputType()
export class AdListRelationFilter {

    @Field(() => AdWhereInput, {nullable:true})
    every?: AdWhereInput;

    @Field(() => AdWhereInput, {nullable:true})
    some?: AdWhereInput;

    @Field(() => AdWhereInput, {nullable:true})
    none?: AdWhereInput;
}
