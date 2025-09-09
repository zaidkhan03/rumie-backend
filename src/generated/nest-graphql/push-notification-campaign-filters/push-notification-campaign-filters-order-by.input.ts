import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PushNotificationCampaignFiltersOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    userGender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userListed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userRentedEver?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userBoughtEver?: `${SortOrder}`;
}
