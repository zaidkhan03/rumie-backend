import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductDeliveryMode } from './product-delivery-mode.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumProductDeliveryModeNullableFilter } from './nested-enum-product-delivery-mode-nullable-filter.input';

@InputType()
export class NestedEnumProductDeliveryModeNullableWithAggregatesFilter {

    @Field(() => ProductDeliveryMode, {nullable:true})
    equals?: `${ProductDeliveryMode}`;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    in?: Array<`${ProductDeliveryMode}`>;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    notIn?: Array<`${ProductDeliveryMode}`>;

    @Field(() => NestedEnumProductDeliveryModeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProductDeliveryModeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumProductDeliveryModeNullableFilter, {nullable:true})
    _min?: NestedEnumProductDeliveryModeNullableFilter;

    @Field(() => NestedEnumProductDeliveryModeNullableFilter, {nullable:true})
    _max?: NestedEnumProductDeliveryModeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
