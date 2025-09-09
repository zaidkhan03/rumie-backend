import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduSelectionListType } from './edu-selection-list-type.enum';

@InputType()
export class EnumEduSelectionListTypeFieldUpdateOperationsInput {

    @Field(() => EduSelectionListType, {nullable:true})
    set?: `${EduSelectionListType}`;
}
