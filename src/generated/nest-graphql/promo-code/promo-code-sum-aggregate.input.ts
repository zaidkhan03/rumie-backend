import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromoCodeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    value?: true;

    @Field(() => Boolean, {nullable:true})
    usageLimit?: true;

    @Field(() => Boolean, {nullable:true})
    useCount?: true;
}
