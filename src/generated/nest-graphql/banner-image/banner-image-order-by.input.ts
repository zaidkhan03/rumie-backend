import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BannerImageOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    CTAType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    CTAPayload?: `${SortOrder}`;
}
