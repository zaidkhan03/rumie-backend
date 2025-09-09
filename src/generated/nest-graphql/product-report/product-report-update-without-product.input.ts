import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumProductReportReasonFieldUpdateOperationsInput } from '../prisma/enum-product-report-reason-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProductReportStatusUpdateEnvelopeInput } from '../product-report-status/product-report-status-update-envelope.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReportedProductsNestedInput } from '../user/user-update-one-required-without-reported-products-nested.input';

@InputType()
export class ProductReportUpdateWithoutProductInput {

    @Field(() => EnumProductReportReasonFieldUpdateOperationsInput, {nullable:true})
    reason?: EnumProductReportReasonFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    details?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProductReportStatusUpdateEnvelopeInput, {nullable:true})
    status?: ProductReportStatusUpdateEnvelopeInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReportedProductsNestedInput, {nullable:true})
    reporter?: UserUpdateOneRequiredWithoutReportedProductsNestedInput;
}
