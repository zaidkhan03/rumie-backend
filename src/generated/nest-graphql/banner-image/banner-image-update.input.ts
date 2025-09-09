import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumCTATypeFieldUpdateOperationsInput } from '../prisma/enum-cta-type-field-update-operations.input';

@InputType()
export class BannerImageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCTATypeFieldUpdateOperationsInput, {nullable:true})
    CTAType?: EnumCTATypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    CTAPayload?: StringFieldUpdateOperationsInput;
}
