import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductDeliveryMode } from './product-delivery-mode.enum';

@InputType()
export class NestedEnumProductDeliveryModeNullableFilter {

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
