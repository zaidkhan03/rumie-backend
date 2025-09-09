import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class FeaturedProductCategoryUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;
}
