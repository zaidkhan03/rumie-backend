import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CampusChatReplyNotficationPayloadCreateInput {

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => String, {nullable:false})
    commentId!: string;

    @Field(() => String, {nullable:false})
    commentedBy!: string;

    @Field(() => String, {nullable:false})
    commentExcerpt!: string;
}
