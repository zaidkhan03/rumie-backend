import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ShoppingPreferenceUpdateuserIdsInput } from './shopping-preference-updateuser-ids.input';
import { UserUncheckedUpdateManyWithoutShoppingPreferencesNestedInput } from '../user/user-unchecked-update-many-without-shopping-preferences-nested.input';

@InputType()
export class ShoppingPreferenceUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ShoppingPreferenceUpdateuserIdsInput, {nullable:true})
    userIds?: ShoppingPreferenceUpdateuserIdsInput;

    @Field(() => UserUncheckedUpdateManyWithoutShoppingPreferencesNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutShoppingPreferencesNestedInput;
}
