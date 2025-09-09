import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ListingSettingMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    enableSelling?: true;

    @Field(() => Boolean, {nullable:true})
    enableRenting?: true;

    @Field(() => Boolean, {nullable:true})
    sellerFees?: true;

    @Field(() => Boolean, {nullable:true})
    taxes?: true;

    @Field(() => Boolean, {nullable:true})
    creditProcessing?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
