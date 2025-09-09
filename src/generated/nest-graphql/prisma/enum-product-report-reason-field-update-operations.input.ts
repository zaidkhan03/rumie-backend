import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportReason } from './product-report-reason.enum';

@InputType()
export class EnumProductReportReasonFieldUpdateOperationsInput {

    @Field(() => ProductReportReason, {nullable:true})
    set?: `${ProductReportReason}`;
}
