import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReplyNotficationPayloadObjectEqualityInput } from './campus-chat-reply-notfication-payload-object-equality.input';
import { CampusChatReplyNotficationPayloadWhereInput } from '../campus-chat-reply-notfication-payload/campus-chat-reply-notfication-payload-where.input';

@InputType()
export class CampusChatReplyNotficationPayloadCompositeFilter {

    @Field(() => CampusChatReplyNotficationPayloadObjectEqualityInput, {nullable:true})
    equals?: CampusChatReplyNotficationPayloadObjectEqualityInput;

    @Field(() => CampusChatReplyNotficationPayloadWhereInput, {nullable:true})
    is?: CampusChatReplyNotficationPayloadWhereInput;

    @Field(() => CampusChatReplyNotficationPayloadWhereInput, {nullable:true})
    isNot?: CampusChatReplyNotficationPayloadWhereInput;
}
