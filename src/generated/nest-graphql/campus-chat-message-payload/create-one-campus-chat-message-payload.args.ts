import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessagePayloadCreateInput } from './campus-chat-message-payload-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCampusChatMessagePayloadArgs {

    @Field(() => CampusChatMessagePayloadCreateInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadCreateInput)
    data!: CampusChatMessagePayloadCreateInput;
}
