import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCommentWhereInput } from '../campus-chat-comment/campus-chat-comment-where.input';
import { Type } from 'class-transformer';

@InputType()
export class CampusChatCommentDeleteManyInput {

    @Field(() => CampusChatCommentWhereInput, {nullable:false})
    @Type(() => CampusChatCommentWhereInput)
    where!: CampusChatCommentWhereInput;
}
