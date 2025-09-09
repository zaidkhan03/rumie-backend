import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportWhereInput } from './product-report-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductReportArgs {

    @Field(() => ProductReportWhereInput, {nullable:true})
    @Type(() => ProductReportWhereInput)
    where?: ProductReportWhereInput;
}
