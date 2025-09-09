import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ConversationAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    paymentLinkCount?: true;
}
