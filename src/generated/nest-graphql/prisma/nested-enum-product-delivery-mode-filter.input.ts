import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductDeliveryMode } from './product-delivery-mode.enum';

@InputType()
export class NestedEnumProductDeliveryModeFilter {

    @Field(() => ProductDeliveryMode, {nullable:true})
    equals?: `${ProductDeliveryMode}`;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    in?: Array<`${ProductDeliveryMode}`>;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    notIn?: Array<`${ProductDeliveryMode}`>;

    @Field(() => NestedEnumProductDeliveryModeFilter, {nullable:true})
    not?: NestedEnumProductDeliveryModeFilter;
}
