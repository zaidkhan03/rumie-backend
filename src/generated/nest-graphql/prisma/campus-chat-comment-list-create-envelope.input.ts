import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCommentCreateInput } from '../campus-chat-comment/campus-chat-comment-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CampusChatCommentListCreateEnvelopeInput {

    @Field(() => [CampusChatCommentCreateInput], {nullable:true})
    @Type(() => CampusChatCommentCreateInput)
    set?: Array<CampusChatCommentCreateInput>;
}
