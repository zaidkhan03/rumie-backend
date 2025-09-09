import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCommentCreateInput } from '../campus-chat-comment/campus-chat-comment-create.input';
import { Type } from 'class-transformer';
import { CampusChatCommentUpdateManyInput } from '../campus-chat-comment/campus-chat-comment-update-many.input';
import { CampusChatCommentDeleteManyInput } from './campus-chat-comment-delete-many.input';

@InputType()
export class CampusChatCommentListUpdateEnvelopeInput {

    @Field(() => [CampusChatCommentCreateInput], {nullable:true})
    @Type(() => CampusChatCommentCreateInput)
    set?: Array<CampusChatCommentCreateInput>;

    @Field(() => [CampusChatCommentCreateInput], {nullable:true})
    push?: Array<CampusChatCommentCreateInput>;

    @Field(() => CampusChatCommentUpdateManyInput, {nullable:true})
    @Type(() => CampusChatCommentUpdateManyInput)
    updateMany?: CampusChatCommentUpdateManyInput;

    @Field(() => CampusChatCommentDeleteManyInput, {nullable:true})
    @Type(() => CampusChatCommentDeleteManyInput)
    deleteMany?: CampusChatCommentDeleteManyInput;
}
