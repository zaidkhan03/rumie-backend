import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportAction } from './product-report-action.enum';
import { NestedEnumProductReportActionNullableFilter } from './nested-enum-product-report-action-nullable-filter.input';

@InputType()
export class EnumProductReportActionNullableFilter {

    @Field(() => ProductReportAction, {nullable:true})
    equals?: `${ProductReportAction}`;

    @Field(() => [ProductReportAction], {nullable:true})
    in?: Array<`${ProductReportAction}`>;

    @Field(() => [ProductReportAction], {nullable:true})
    notIn?: Array<`${ProductReportAction}`>;

    @Field(() => NestedEnumProductReportActionNullableFilter, {nullable:true})
    not?: NestedEnumProductReportActionNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
