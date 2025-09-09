import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReplyNotficationPayloadCreateInput } from './campus-chat-reply-notfication-payload-create.input';
import { Type } from 'class-transformer';
import { CampusChatReplyNotficationPayloadUpdateInput } from './campus-chat-reply-notfication-payload-update.input';

@InputType()
export class CampusChatReplyNotficationPayloadUpdateEnvelopeInput {

    @Field(() => CampusChatReplyNotficationPayloadCreateInput, {nullable:true})
    @Type(() => CampusChatReplyNotficationPayloadCreateInput)
    set?: CampusChatReplyNotficationPayloadCreateInput;

    @Field(() => CampusChatReplyNotficationPayloadUpdateInput, {nullable:true})
    @Type(() => CampusChatReplyNotficationPayloadUpdateInput)
    update?: CampusChatReplyNotficationPayloadUpdateInput;
}
