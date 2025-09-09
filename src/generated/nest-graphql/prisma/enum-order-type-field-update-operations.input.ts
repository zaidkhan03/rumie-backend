import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderType } from './order-type.enum';

@InputType()
export class EnumOrderTypeFieldUpdateOperationsInput {

    @Field(() => OrderType, {nullable:true})
    set?: `${OrderType}`;
}
