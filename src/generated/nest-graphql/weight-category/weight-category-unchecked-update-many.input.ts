import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PackageDimensionsUpdateEnvelopeInput } from '../package-dimensions/package-dimensions-update-envelope.input';
import { PackageWeightUpdateEnvelopeInput } from '../package-weight/package-weight-update-envelope.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class WeightCategoryUncheckedUpdateManyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alias?: StringFieldUpdateOperationsInput;

    @Field(() => PackageDimensionsUpdateEnvelopeInput, {nullable:true})
    packageDimensions?: PackageDimensionsUpdateEnvelopeInput;

    @Field(() => PackageWeightUpdateEnvelopeInput, {nullable:true})
    packageWeight?: PackageWeightUpdateEnvelopeInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    shippingFee?: FloatFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
