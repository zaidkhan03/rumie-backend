import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportAction } from './product-report-action.enum';

@InputType()
export class NullableEnumProductReportActionFieldUpdateOperationsInput {

    @Field(() => ProductReportAction, {nullable:true})
    set?: `${ProductReportAction}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
