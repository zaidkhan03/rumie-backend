import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportStatusObjectEqualityInput } from './product-report-status-object-equality.input';
import { ProductReportStatusWhereInput } from '../product-report-status/product-report-status-where.input';

@InputType()
export class ProductReportStatusCompositeFilter {

    @Field(() => ProductReportStatusObjectEqualityInput, {nullable:true})
    equals?: ProductReportStatusObjectEqualityInput;

    @Field(() => ProductReportStatusWhereInput, {nullable:true})
    is?: ProductReportStatusWhereInput;

    @Field(() => ProductReportStatusWhereInput, {nullable:true})
    isNot?: ProductReportStatusWhereInput;
}
