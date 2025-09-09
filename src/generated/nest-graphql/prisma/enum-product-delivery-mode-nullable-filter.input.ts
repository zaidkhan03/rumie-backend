import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductDeliveryMode } from './product-delivery-mode.enum';
import { NestedEnumProductDeliveryModeNullableFilter } from './nested-enum-product-delivery-mode-nullable-filter.input';

@InputType()
export class EnumProductDeliveryModeNullableFilter {

    @Field(() => ProductDeliveryMode, {nullable:true})
    equals?: `${ProductDeliveryMode}`;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    in?: Array<`${ProductDeliveryMode}`>;

    @Field(() => [ProductDeliveryMode], {nullable:true})
    notIn?: Array<`${ProductDeliveryMode}`>;

    @Field(() => NestedEnumProductDeliveryModeNullableFilter, {nullable:true})
    not?: NestedEnumProductDeliveryModeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
