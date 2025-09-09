import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportAction } from './product-report-action.enum';

@InputType()
export class ProductReportStatusObjectEqualityInput {

    @Field(() => Boolean, {nullable:false})
    reviewed!: boolean;

    @Field(() => Date, {nullable:true})
    reviewedAt?: Date | string;

    @Field(() => String, {nullable:true})
    reviewedBy?: string;

    @Field(() => ProductReportAction, {nullable:true})
    action?: `${ProductReportAction}`;
}
