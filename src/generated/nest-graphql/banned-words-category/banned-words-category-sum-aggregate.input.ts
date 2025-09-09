import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BannedWordsCategorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    severity?: true;
}
