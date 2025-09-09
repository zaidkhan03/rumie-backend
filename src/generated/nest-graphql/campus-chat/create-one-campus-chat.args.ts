import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatCreateInput } from './campus-chat-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCampusChatArgs {

    @Field(() => CampusChatCreateInput, {nullable:false})
    @Type(() => CampusChatCreateInput)
    data!: CampusChatCreateInput;
}
