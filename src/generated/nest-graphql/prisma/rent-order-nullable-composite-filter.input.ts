import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOrderObjectEqualityInput } from './rent-order-object-equality.input';
import { RentOrderWhereInput } from '../rent-order/rent-order-where.input';

@InputType()
export class RentOrderNullableCompositeFilter {

    @Field(() => RentOrderObjectEqualityInput, {nullable:true})
    equals?: RentOrderObjectEqualityInput;

    @Field(() => RentOrderWhereInput, {nullable:true})
    is?: RentOrderWhereInput;

    @Field(() => RentOrderWhereInput, {nullable:true})
    isNot?: RentOrderWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
