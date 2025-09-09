import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateSystemMessageObjectEqualityInput } from './order-update-system-message-object-equality.input';
import { OrderUpdateSystemMessageWhereInput } from '../order-update-system-message/order-update-system-message-where.input';

@InputType()
export class OrderUpdateSystemMessageCompositeFilter {

    @Field(() => OrderUpdateSystemMessageObjectEqualityInput, {nullable:true})
    equals?: OrderUpdateSystemMessageObjectEqualityInput;

    @Field(() => OrderUpdateSystemMessageWhereInput, {nullable:true})
    is?: OrderUpdateSystemMessageWhereInput;

    @Field(() => OrderUpdateSystemMessageWhereInput, {nullable:true})
    isNot?: OrderUpdateSystemMessageWhereInput;
}
