import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateManyWithoutEduInstituteNestedInput } from '../user/user-update-many-without-edu-institute-nested.input';
import { CampusChatUpdateManyWithoutEduInstituteNestedInput } from '../campus-chat/campus-chat-update-many-without-edu-institute-nested.input';
import { ProductListingUpdateManyWithoutUploaderEduInstituteNestedInput } from '../product-listing/product-listing-update-many-without-uploader-edu-institute-nested.input';

@InputType()
export class EduInstituteUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    domain?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    logo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    state?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    zip?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    location?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    active?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    passCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isRegistered?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutEduInstituteNestedInput, {nullable:true})
    students?: UserUpdateManyWithoutEduInstituteNestedInput;

    @Field(() => CampusChatUpdateManyWithoutEduInstituteNestedInput, {nullable:true})
    campusChats?: CampusChatUpdateManyWithoutEduInstituteNestedInput;

    @Field(() => ProductListingUpdateManyWithoutUploaderEduInstituteNestedInput, {nullable:true})
    productListings?: ProductListingUpdateManyWithoutUploaderEduInstituteNestedInput;
}
