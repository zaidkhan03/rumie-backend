import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportAction } from '../prisma/product-report-action.enum';

@InputType()
export class ProductReportStatusCreateInput {

    @Field(() => Boolean, {nullable:true})
    reviewed?: boolean;

    @Field(() => Date, {nullable:true})
    reviewedAt?: Date | string;

    @Field(() => String, {nullable:true})
    reviewedBy?: string;

    @Field(() => ProductReportAction, {nullable:true})
    action?: `${ProductReportAction}`;
}
