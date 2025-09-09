import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductReportReason } from '../prisma/product-report-reason.enum';
import { ProductReportStatus } from '../product-report-status/product-report-status.model';
import { ProductListing } from '../product-listing/product-listing.model';
import { User } from '../user/user.model';

@ObjectType()
export class ProductReport {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    reporterId!: string;

    @Field(() => ProductReportReason, {nullable:false})
    reason!: `${ProductReportReason}`;

    @Field(() => String, {nullable:true})
    details!: string | null;

    @Field(() => ProductReportStatus, {nullable:false})
    status?: ProductReportStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ProductListing, {nullable:false})
    product?: ProductListing;

    @Field(() => User, {nullable:false})
    reporter?: User;
}
