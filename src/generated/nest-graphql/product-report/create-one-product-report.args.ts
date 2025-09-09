import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportCreateInput } from './product-report-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductReportArgs {

    @Field(() => ProductReportCreateInput, {nullable:false})
    @Type(() => ProductReportCreateInput)
    data!: ProductReportCreateInput;
}
