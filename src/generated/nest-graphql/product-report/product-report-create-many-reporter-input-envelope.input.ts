import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportCreateManyReporterInput } from './product-report-create-many-reporter.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductReportCreateManyReporterInputEnvelope {

    @Field(() => [ProductReportCreateManyReporterInput], {nullable:false})
    @Type(() => ProductReportCreateManyReporterInput)
    data!: Array<ProductReportCreateManyReporterInput>;
}
