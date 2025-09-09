import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumStoryTypeFieldUpdateOperationsInput } from '../prisma/enum-story-type-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class StoryMediaUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => EnumStoryTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumStoryTypeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    duration?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: NullableStringFieldUpdateOperationsInput;
}
