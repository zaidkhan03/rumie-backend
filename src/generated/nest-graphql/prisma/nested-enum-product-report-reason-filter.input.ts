import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportReason } from './product-report-reason.enum';

@InputType()
export class NestedEnumProductReportReasonFilter {

    @Field(() => ProductReportReason, {nullable:true})
    equals?: `${ProductReportReason}`;

    @Field(() => [ProductReportReason], {nullable:true})
    in?: Array<`${ProductReportReason}`>;

    @Field(() => [ProductReportReason], {nullable:true})
    notIn?: Array<`${ProductReportReason}`>;

    @Field(() => NestedEnumProductReportReasonFilter, {nullable:true})
    not?: NestedEnumProductReportReasonFilter;
}
