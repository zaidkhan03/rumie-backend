import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCommentWhereInput } from './campus-chat-comment-where.input';
import { Type } from 'class-transformer';
import { CampusChatCommentUpdateInput } from './campus-chat-comment-update.input';

@InputType()
export class CampusChatCommentUpdateManyInput {

    @Field(() => CampusChatCommentWhereInput, {nullable:false})
    @Type(() => CampusChatCommentWhereInput)
    where!: CampusChatCommentWhereInput;

    @Field(() => CampusChatCommentUpdateInput, {nullable:false})
    @Type(() => CampusChatCommentUpdateInput)
    data!: CampusChatCommentUpdateInput;
}
