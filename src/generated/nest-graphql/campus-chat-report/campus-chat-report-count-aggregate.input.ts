import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CampusChatReportCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    messageId?: true;

    @Field(() => Boolean, {nullable:true})
    commentId?: true;

    @Field(() => Boolean, {nullable:true})
    reporterId?: true;

    @Field(() => Boolean, {nullable:true})
    reason?: true;

    @Field(() => Boolean, {nullable:true})
    details?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
