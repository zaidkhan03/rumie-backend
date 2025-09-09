import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportReason } from '../prisma/product-report-reason.enum';
import { ProductReportStatusCreateEnvelopeInput } from '../product-report-status/product-report-status-create-envelope.input';

@InputType()
export class ProductReportCreateManyReporterInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => ProductReportReason, {nullable:false})
    reason!: `${ProductReportReason}`;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => ProductReportStatusCreateEnvelopeInput, {nullable:false})
    status!: ProductReportStatusCreateEnvelopeInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
