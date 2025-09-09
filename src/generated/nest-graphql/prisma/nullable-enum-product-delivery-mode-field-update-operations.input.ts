import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductDeliveryMode } from './product-delivery-mode.enum';

@InputType()
export class NullableEnumProductDeliveryModeFieldUpdateOperationsInput {

    @Field(() => ProductDeliveryMode, {nullable:true})
    set?: `${ProductDeliveryMode}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
