import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReplyNotficationPayloadCreateInput } from './campus-chat-reply-notfication-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CampusChatReplyNotficationPayloadCreateEnvelopeInput {

    @Field(() => CampusChatReplyNotficationPayloadCreateInput, {nullable:true})
    @Type(() => CampusChatReplyNotficationPayloadCreateInput)
    set?: CampusChatReplyNotficationPayloadCreateInput;
}
