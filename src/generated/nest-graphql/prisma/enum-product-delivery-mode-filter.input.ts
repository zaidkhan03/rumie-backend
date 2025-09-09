import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductDeliveryMode } from './product-delivery-mode.enum';
import { NestedEnumProductDeliveryModeFilter } from './nested-enum-product-delivery-mode-filter.input';

@InputType()
export class EnumProductDeliveryModeFilter {

    @Field(() => ProductDeliveryMode, {nullable:true})
    equals?: `${ProductDeliveryMode}`;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    in?: Array<`${ProductDeliveryMode}`>;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    notIn?: Array<`${ProductDeliveryMode}`>;

    @Field(() => NestedEnumProductDeliveryModeFilter, {nullable:true})
    not?: NestedEnumProductDeliveryModeFilter;
}
