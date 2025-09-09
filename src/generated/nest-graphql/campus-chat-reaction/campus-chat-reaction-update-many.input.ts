import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReactionWhereInput } from './campus-chat-reaction-where.input';
import { Type } from 'class-transformer';
import { CampusChatReactionUpdateInput } from './campus-chat-reaction-update.input';

@InputType()
export class CampusChatReactionUpdateManyInput {

    @Field(() => CampusChatReactionWhereInput, {nullable:false})
    @Type(() => CampusChatReactionWhereInput)
    where!: CampusChatReactionWhereInput;

    @Field(() => CampusChatReactionUpdateInput, {nullable:false})
    @Type(() => CampusChatReactionUpdateInput)
    data!: CampusChatReactionUpdateInput;
}
