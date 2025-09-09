import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    viewCount?: true;
}
