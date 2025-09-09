import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ArgsType()
export class FindEduInstituteRawArgs {

    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}
