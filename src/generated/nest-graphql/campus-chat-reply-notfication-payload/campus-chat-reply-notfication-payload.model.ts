import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CampusChatReplyNotficationPayload {

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => String, {nullable:false})
    commentId!: string;

    @Field(() => String, {nullable:false})
    commentedBy!: string;

    @Field(() => String, {nullable:false})
    commentExcerpt!: string;
}
