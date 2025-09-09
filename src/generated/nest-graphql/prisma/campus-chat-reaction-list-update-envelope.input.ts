import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReactionCreateInput } from '../campus-chat-reaction/campus-chat-reaction-create.input';
import { Type } from 'class-transformer';
import { CampusChatReactionUpdateManyInput } from '../campus-chat-reaction/campus-chat-reaction-update-many.input';
import { CampusChatReactionDeleteManyInput } from './campus-chat-reaction-delete-many.input';

@InputType()
export class CampusChatReactionListUpdateEnvelopeInput {

    @Field(() => [CampusChatReactionCreateInput], {nullable:true})
    @Type(() => CampusChatReactionCreateInput)
    set?: Array<CampusChatReactionCreateInput>;

    @Field(() => [CampusChatReactionCreateInput], {nullable:true})
    push?: Array<CampusChatReactionCreateInput>;

    @Field(() => CampusChatReactionUpdateManyInput, {nullable:true})
    @Type(() => CampusChatReactionUpdateManyInput)
    updateMany?: CampusChatReactionUpdateManyInput;

    @Field(() => CampusChatReactionDeleteManyInput, {nullable:true})
    @Type(() => CampusChatReactionDeleteManyInput)
    deleteMany?: CampusChatReactionDeleteManyInput;
}
