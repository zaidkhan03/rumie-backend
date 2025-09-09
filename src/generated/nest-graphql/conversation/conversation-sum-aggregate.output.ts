import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ConversationSumAggregate {

    @Field(() => Int, {nullable:true})
    paymentLinkCount?: number;
}
