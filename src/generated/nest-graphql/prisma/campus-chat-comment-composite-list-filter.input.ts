import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCommentObjectEqualityInput } from './campus-chat-comment-object-equality.input';
import { CampusChatCommentWhereInput } from '../campus-chat-comment/campus-chat-comment-where.input';

@InputType()
export class CampusChatCommentCompositeListFilter {

    @Field(() => [CampusChatCommentObjectEqualityInput], {nullable:true})
    equals?: Array<CampusChatCommentObjectEqualityInput>;

    @Field(() => CampusChatCommentWhereInput, {nullable:true})
    every?: CampusChatCommentWhereInput;

    @Field(() => CampusChatCommentWhereInput, {nullable:true})
    some?: CampusChatCommentWhereInput;

    @Field(() => CampusChatCommentWhereInput, {nullable:true})
    none?: CampusChatCommentWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
