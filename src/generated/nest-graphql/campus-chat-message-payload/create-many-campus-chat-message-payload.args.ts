import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessagePayloadCreateManyInput } from './campus-chat-message-payload-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCampusChatMessagePayloadArgs {

    @Field(() => [CampusChatMessagePayloadCreateManyInput], {nullable:false})
    @Type(() => CampusChatMessagePayloadCreateManyInput)
    data!: Array<CampusChatMessagePayloadCreateManyInput>;
}
