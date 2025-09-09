import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportStatusCreateInput } from './product-report-status-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductReportStatusCreateEnvelopeInput {

    @Field(() => ProductReportStatusCreateInput, {nullable:true})
    @Type(() => ProductReportStatusCreateInput)
    set?: ProductReportStatusCreateInput;
}
