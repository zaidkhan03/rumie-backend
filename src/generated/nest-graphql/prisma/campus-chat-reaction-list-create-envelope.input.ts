import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReactionCreateInput } from '../campus-chat-reaction/campus-chat-reaction-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CampusChatReactionListCreateEnvelopeInput {

    @Field(() => [CampusChatReactionCreateInput], {nullable:true})
    @Type(() => CampusChatReactionCreateInput)
    set?: Array<CampusChatReactionCreateInput>;
}
