import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { HobbyUpdateuserIdsInput } from './hobby-updateuser-ids.input';
import { UserUncheckedUpdateManyWithoutHobbiesNestedInput } from '../user/user-unchecked-update-many-without-hobbies-nested.input';

@InputType()
export class HobbyUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => HobbyUpdateuserIdsInput, {nullable:true})
    userIds?: HobbyUpdateuserIdsInput;

    @Field(() => UserUncheckedUpdateManyWithoutHobbiesNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutHobbiesNestedInput;
}
