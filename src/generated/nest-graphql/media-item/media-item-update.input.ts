import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumMediaTypeFieldUpdateOperationsInput } from '../prisma/enum-media-type-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class MediaItemUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumMediaTypeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    thumb?: BoolFieldUpdateOperationsInput;
}
