import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BannedWordsCategoryAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    severity?: true;
}
