import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessageCreateInput } from './campus-chat-message-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCampusChatMessageArgs {

    @Field(() => CampusChatMessageCreateInput, {nullable:false})
    @Type(() => CampusChatMessageCreateInput)
    data!: CampusChatMessageCreateInput;
}
