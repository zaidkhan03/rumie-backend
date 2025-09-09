import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ListingSettingCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    enableSelling?: true;

    @Field(() => Boolean, {nullable:true})
    enableRenting?: true;

    @Field(() => Boolean, {nullable:true})
    reasonsForSelling?: true;

    @Field(() => Boolean, {nullable:true})
    meetupPreferences?: true;

    @Field(() => Boolean, {nullable:true})
    productDeliveryModes?: true;

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

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
