import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportUpdateManyMutationInput } from './product-report-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductReportWhereInput } from './product-report-where.input';

@ArgsType()
export class UpdateManyProductReportArgs {

    @Field(() => ProductReportUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductReportUpdateManyMutationInput)
    data!: ProductReportUpdateManyMutationInput;

    @Field(() => ProductReportWhereInput, {nullable:true})
    @Type(() => ProductReportWhereInput)
    where?: ProductReportWhereInput;
}
