import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PushNotificationDataOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    body?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    icon?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cardImage?: `${SortOrder}`;
}
