import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReactionObjectEqualityInput } from './campus-chat-reaction-object-equality.input';
import { CampusChatReactionWhereInput } from '../campus-chat-reaction/campus-chat-reaction-where.input';

@InputType()
export class CampusChatReactionCompositeListFilter {

    @Field(() => [CampusChatReactionObjectEqualityInput], {nullable:true})
    equals?: Array<CampusChatReactionObjectEqualityInput>;

    @Field(() => CampusChatReactionWhereInput, {nullable:true})
    every?: CampusChatReactionWhereInput;

    @Field(() => CampusChatReactionWhereInput, {nullable:true})
    some?: CampusChatReactionWhereInput;

    @Field(() => CampusChatReactionWhereInput, {nullable:true})
    none?: CampusChatReactionWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
