import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReactionWhereInput } from '../campus-chat-reaction/campus-chat-reaction-where.input';
import { Type } from 'class-transformer';

@InputType()
export class CampusChatReactionDeleteManyInput {

    @Field(() => CampusChatReactionWhereInput, {nullable:false})
    @Type(() => CampusChatReactionWhereInput)
    where!: CampusChatReactionWhereInput;
}
