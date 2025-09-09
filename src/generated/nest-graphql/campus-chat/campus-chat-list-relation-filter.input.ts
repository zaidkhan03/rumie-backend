import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatWhereInput } from './campus-chat-where.input';

@InputType()
export class CampusChatListRelationFilter {

    @Field(() => CampusChatWhereInput, {nullable:true})
    every?: CampusChatWhereInput;

    @Field(() => CampusChatWhereInput, {nullable:true})
    some?: CampusChatWhereInput;

    @Field(() => CampusChatWhereInput, {nullable:true})
    none?: CampusChatWhereInput;
}
