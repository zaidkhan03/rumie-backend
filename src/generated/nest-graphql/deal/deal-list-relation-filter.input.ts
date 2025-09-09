import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealWhereInput } from './deal-where.input';

@InputType()
export class DealListRelationFilter {

    @Field(() => DealWhereInput, {nullable:true})
    every?: DealWhereInput;

    @Field(() => DealWhereInput, {nullable:true})
    some?: DealWhereInput;

    @Field(() => DealWhereInput, {nullable:true})
    none?: DealWhereInput;
}
