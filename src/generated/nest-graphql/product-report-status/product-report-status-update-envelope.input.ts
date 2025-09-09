import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportStatusCreateInput } from './product-report-status-create.input';
import { Type } from 'class-transformer';
import { ProductReportStatusUpdateInput } from './product-report-status-update.input';

@InputType()
export class ProductReportStatusUpdateEnvelopeInput {

    @Field(() => ProductReportStatusCreateInput, {nullable:true})
    @Type(() => ProductReportStatusCreateInput)
    set?: ProductReportStatusCreateInput;

    @Field(() => ProductReportStatusUpdateInput, {nullable:true})
    @Type(() => ProductReportStatusUpdateInput)
    update?: ProductReportStatusUpdateInput;
}
