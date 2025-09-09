import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessagePayloadUpdateManyMutationInput } from './campus-chat-message-payload-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CampusChatMessagePayloadWhereInput } from './campus-chat-message-payload-where.input';

@ArgsType()
export class UpdateManyCampusChatMessagePayloadArgs {

    @Field(() => CampusChatMessagePayloadUpdateManyMutationInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadUpdateManyMutationInput)
    data!: CampusChatMessagePayloadUpdateManyMutationInput;

    @Field(() => CampusChatMessagePayloadWhereInput, {nullable:true})
    @Type(() => CampusChatMessagePayloadWhereInput)
    where?: CampusChatMessagePayloadWhereInput;
}
