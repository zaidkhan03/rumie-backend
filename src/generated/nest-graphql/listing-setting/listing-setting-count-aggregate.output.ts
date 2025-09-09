import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListingSettingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    enableSelling!: number;

    @Field(() => Int, {nullable:false})
    enableRenting!: number;

    @Field(() => Int, {nullable:false})
    reasonsForSelling!: number;

    @Field(() => Int, {nullable:false})
    meetupPreferences!: number;

    @Field(() => Int, {nullable:false})
    productDeliveryModes!: number;

    @Field(() => Int, {nullable:false})
    sellerFees!: number;

    @Field(() => Int, {nullable:false})
    taxes!: number;

    @Field(() => Int, {nullable:false})
    creditProcessing!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
