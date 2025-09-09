import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductDeliveryMode } from './product-delivery-mode.enum';

@InputType()
export class EnumProductDeliveryModeFieldUpdateOperationsInput {

    @Field(() => ProductDeliveryMode, {nullable:true})
    set?: `${ProductDeliveryMode}`;
}
