import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumUserGenderFilterFieldUpdateOperationsInput } from '../prisma/enum-user-gender-filter-field-update-operations.input';
import { NullableEnumUserListedFilterFieldUpdateOperationsInput } from '../prisma/nullable-enum-user-listed-filter-field-update-operations.input';
import { NullableEnumBooleanChoiceFieldUpdateOperationsInput } from '../prisma/nullable-enum-boolean-choice-field-update-operations.input';

@InputType()
export class PushNotificationCampaignFiltersUpdateInput {

    @Field(() => EnumUserGenderFilterFieldUpdateOperationsInput, {nullable:true})
    userGender?: EnumUserGenderFilterFieldUpdateOperationsInput;

    @Field(() => NullableEnumUserListedFilterFieldUpdateOperationsInput, {nullable:true})
    userListed?: NullableEnumUserListedFilterFieldUpdateOperationsInput;

    @Field(() => NullableEnumBooleanChoiceFieldUpdateOperationsInput, {nullable:true})
    userRentedEver?: NullableEnumBooleanChoiceFieldUpdateOperationsInput;

    @Field(() => NullableEnumBooleanChoiceFieldUpdateOperationsInput, {nullable:true})
    userBoughtEver?: NullableEnumBooleanChoiceFieldUpdateOperationsInput;
}
