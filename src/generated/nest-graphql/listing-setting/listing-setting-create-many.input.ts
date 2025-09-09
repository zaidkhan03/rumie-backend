import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListingSettingCreatereasonsForSellingInput } from './listing-setting-createreasons-for-selling.input';
import { ListingSettingCreatemeetupPreferencesInput } from './listing-setting-createmeetup-preferences.input';
import { ListingSettingCreateproductDeliveryModesInput } from './listing-setting-createproduct-delivery-modes.input';
import { Int } from '@nestjs/graphql';
import { NameAndImageCreateInput } from '../name-and-image/name-and-image-create.input';

@InputType()
export class ListingSettingCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:false})
    enableSelling!: boolean;

    @Field(() => Boolean, {nullable:false})
    enableRenting!: boolean;

    @Field(() => ListingSettingCreatereasonsForSellingInput, {nullable:true})
    reasonsForSelling?: ListingSettingCreatereasonsForSellingInput;

    @Field(() => ListingSettingCreatemeetupPreferencesInput, {nullable:true})
    meetupPreferences?: ListingSettingCreatemeetupPreferencesInput;

    @Field(() => ListingSettingCreateproductDeliveryModesInput, {nullable:true})
    productDeliveryModes?: ListingSettingCreateproductDeliveryModesInput;

    @Field(() => Int, {nullable:false})
    sellerFees!: number;

    @Field(() => Int, {nullable:false})
    taxes!: number;

    @Field(() => Int, {nullable:false})
    creditProcessing!: number;

    @Field(() => [NameAndImageCreateInput], {nullable:true})
    genders?: Array<NameAndImageCreateInput>;

    @Field(() => [NameAndImageCreateInput], {nullable:true})
    conditions?: Array<NameAndImageCreateInput>;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
