import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductReportReason } from '../prisma/product-report-reason.enum';

@ObjectType()
export class ProductReportMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => String, {nullable:true})
    reporterId?: string;

    @Field(() => ProductReportReason, {nullable:true})
    reason?: `${ProductReportReason}`;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
