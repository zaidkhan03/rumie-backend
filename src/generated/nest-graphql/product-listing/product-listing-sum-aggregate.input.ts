import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductListingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    price?: true;
}
