import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DealMeetupPreferenceOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    days?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    time?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;
}
