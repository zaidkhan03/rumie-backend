import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderPayoutObjectEqualityInput } from './order-payout-object-equality.input';
import { OrderPayoutWhereInput } from '../order-payout/order-payout-where.input';

@InputType()
export class OrderPayoutCompositeFilter {

    @Field(() => OrderPayoutObjectEqualityInput, {nullable:true})
    equals?: OrderPayoutObjectEqualityInput;

    @Field(() => OrderPayoutWhereInput, {nullable:true})
    is?: OrderPayoutWhereInput;

    @Field(() => OrderPayoutWhereInput, {nullable:true})
    isNot?: OrderPayoutWhereInput;
}
