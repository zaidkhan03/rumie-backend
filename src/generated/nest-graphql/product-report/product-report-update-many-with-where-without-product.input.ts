import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportScalarWhereInput } from './product-report-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductReportUpdateManyMutationInput } from './product-report-update-many-mutation.input';

@InputType()
export class ProductReportUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductReportScalarWhereInput, {nullable:false})
    @Type(() => ProductReportScalarWhereInput)
    where!: ProductReportScalarWhereInput;

    @Field(() => ProductReportUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductReportUpdateManyMutationInput)
    data!: ProductReportUpdateManyMutationInput;
}
