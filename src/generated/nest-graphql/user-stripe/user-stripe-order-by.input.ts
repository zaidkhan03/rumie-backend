import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserStripeOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    customerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expressAccountId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    onboardingComplete?: `${SortOrder}`;
}
