import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressOrderByInput } from '../address/address-order-by.input';

@InputType()
export class ShipmentOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    labelId?: `${SortOrder}`;

    @Field(() => AddressOrderByInput, {nullable:true})
    from?: AddressOrderByInput;

    @Field(() => AddressOrderByInput, {nullable:true})
    to?: AddressOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    labelDownloadlink?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    trackingNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingCharge?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingChargePayer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    events?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status_description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
}
