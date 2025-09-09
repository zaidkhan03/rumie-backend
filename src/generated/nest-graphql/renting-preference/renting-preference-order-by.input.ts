import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RentingPreferenceOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    availability?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    addressDescription?: `${SortOrder}`;
}
