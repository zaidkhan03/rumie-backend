import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CampusChatMessageMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    chatId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    reportCount?: true;

    @Field(() => Boolean, {nullable:true})
    flagged?: true;

    @Field(() => Boolean, {nullable:true})
    flaggedAt?: true;

    @Field(() => Boolean, {nullable:true})
    flaggedBy?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
