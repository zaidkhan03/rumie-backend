import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumProductReportActionFieldUpdateOperationsInput } from '../prisma/nullable-enum-product-report-action-field-update-operations.input';

@InputType()
export class ProductReportStatusUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    reviewed?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reviewedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumProductReportActionFieldUpdateOperationsInput, {nullable:true})
    action?: NullableEnumProductReportActionFieldUpdateOperationsInput;
}
