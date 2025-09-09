import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportWhereInput } from './product-report-where.input';

@InputType()
export class ProductReportListRelationFilter {

    @Field(() => ProductReportWhereInput, {nullable:true})
    every?: ProductReportWhereInput;

    @Field(() => ProductReportWhereInput, {nullable:true})
    some?: ProductReportWhereInput;

    @Field(() => ProductReportWhereInput, {nullable:true})
    none?: ProductReportWhereInput;
}
