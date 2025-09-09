import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ConversationAvgAggregate {

    @Field(() => Float, {nullable:true})
    paymentLinkCount?: number;
}
