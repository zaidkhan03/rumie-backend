import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ListingSettingAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sellerFees?: true;

    @Field(() => Boolean, {nullable:true})
    taxes?: true;

    @Field(() => Boolean, {nullable:true})
    creditProcessing?: true;
}
