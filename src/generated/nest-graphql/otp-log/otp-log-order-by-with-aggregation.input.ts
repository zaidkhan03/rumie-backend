import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OtpLogCountOrderByAggregateInput } from './otp-log-count-order-by-aggregate.input';
import { OtpLogMaxOrderByAggregateInput } from './otp-log-max-order-by-aggregate.input';
import { OtpLogMinOrderByAggregateInput } from './otp-log-min-order-by-aggregate.input';

@InputType()
export class OtpLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    key?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    otp?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OtpLogCountOrderByAggregateInput, {nullable:true})
    _count?: OtpLogCountOrderByAggregateInput;

    @Field(() => OtpLogMaxOrderByAggregateInput, {nullable:true})
    _max?: OtpLogMaxOrderByAggregateInput;

    @Field(() => OtpLogMinOrderByAggregateInput, {nullable:true})
    _min?: OtpLogMinOrderByAggregateInput;
}
