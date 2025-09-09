import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooleanChoice } from './boolean-choice.enum';

@InputType()
export class NullableEnumBooleanChoiceFieldUpdateOperationsInput {

    @Field(() => BooleanChoice, {nullable:true})
    set?: `${BooleanChoice}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
