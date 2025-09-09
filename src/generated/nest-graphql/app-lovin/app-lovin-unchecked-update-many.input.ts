import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAppLovingAdTypeFieldUpdateOperationsInput } from '../prisma/enum-app-loving-ad-type-field-update-operations.input';
import { EnumAppLovinPositionFieldUpdateOperationsInput } from '../prisma/enum-app-lovin-position-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class AppLovinUncheckedUpdateManyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alias?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adUnitId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAppLovingAdTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAppLovingAdTypeFieldUpdateOperationsInput;

    @Field(() => EnumAppLovinPositionFieldUpdateOperationsInput, {nullable:true})
    position?: EnumAppLovinPositionFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
