import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AddressOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address1?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address2?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    zip?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    addressType?: `${SortOrder}`;
}
