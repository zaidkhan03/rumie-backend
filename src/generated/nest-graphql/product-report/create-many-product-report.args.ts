import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportCreateManyInput } from './product-report-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductReportArgs {

    @Field(() => [ProductReportCreateManyInput], {nullable:false})
    @Type(() => ProductReportCreateManyInput)
    data!: Array<ProductReportCreateManyInput>;
}
