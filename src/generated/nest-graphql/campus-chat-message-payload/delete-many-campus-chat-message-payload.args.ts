import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessagePayloadWhereInput } from './campus-chat-message-payload-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCampusChatMessagePayloadArgs {

    @Field(() => CampusChatMessagePayloadWhereInput, {nullable:true})
    @Type(() => CampusChatMessagePayloadWhereInput)
    where?: CampusChatMessagePayloadWhereInput;
}
