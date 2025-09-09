import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumUserGenderFilterFieldUpdateOperationsInput } from '../prisma/enum-user-gender-filter-field-update-operations.input';

@InputType()
export class AppPopupFiltersUpdateInput {

    @Field(() => EnumUserGenderFilterFieldUpdateOperationsInput, {nullable:true})
    userGender?: EnumUserGenderFilterFieldUpdateOperationsInput;
}
