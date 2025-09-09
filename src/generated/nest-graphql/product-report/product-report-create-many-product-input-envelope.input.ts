import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportCreateManyProductInput } from './product-report-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductReportCreateManyProductInputEnvelope {

    @Field(() => [ProductReportCreateManyProductInput], {nullable:false})
    @Type(() => ProductReportCreateManyProductInput)
    data!: Array<ProductReportCreateManyProductInput>;
}
