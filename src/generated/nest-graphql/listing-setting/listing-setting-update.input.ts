import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ListingSettingUpdatereasonsForSellingInput } from './listing-setting-updatereasons-for-selling.input';
import { ListingSettingUpdatemeetupPreferencesInput } from './listing-setting-updatemeetup-preferences.input';
import { ListingSettingUpdateproductDeliveryModesInput } from './listing-setting-updateproduct-delivery-modes.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NameAndImageCreateInput } from '../name-and-image/name-and-image-create.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ListingSettingUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enableSelling?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enableRenting?: BoolFieldUpdateOperationsInput;

    @Field(() => ListingSettingUpdatereasonsForSellingInput, {nullable:true})
    reasonsForSelling?: ListingSettingUpdatereasonsForSellingInput;

    @Field(() => ListingSettingUpdatemeetupPreferencesInput, {nullable:true})
    meetupPreferences?: ListingSettingUpdatemeetupPreferencesInput;

    @Field(() => ListingSettingUpdateproductDeliveryModesInput, {nullable:true})
    productDeliveryModes?: ListingSettingUpdateproductDeliveryModesInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sellerFees?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    taxes?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    creditProcessing?: IntFieldUpdateOperationsInput;

    @Field(() => [NameAndImageCreateInput], {nullable:true})
    genders?: Array<NameAndImageCreateInput>;

    @Field(() => [NameAndImageCreateInput], {nullable:true})
    conditions?: Array<NameAndImageCreateInput>;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
