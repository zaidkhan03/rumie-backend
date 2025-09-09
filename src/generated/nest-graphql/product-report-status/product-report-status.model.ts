import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductReportAction } from '../prisma/product-report-action.enum';

@ObjectType()
export class ProductReportStatus {

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    reviewed!: boolean;

    @Field(() => Date, {nullable:true})
    reviewedAt!: Date | null;

    @Field(() => String, {nullable:true})
    reviewedBy!: string | null;

    @Field(() => ProductReportAction, {nullable:true})
    action!: `${ProductReportAction}` | null;
}
