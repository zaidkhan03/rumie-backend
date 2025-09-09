import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdvertiserPOCOrderByInput } from '../advertiser-poc/advertiser-poc-order-by.input';
import { AdOrderByRelationAggregateInput } from '../ad/ad-order-by-relation-aggregate.input';

@InputType()
export class AdvertiserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyWebsiteUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    logo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address1?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address2?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    zip?: `${SortOrder}`;

    @Field(() => AdvertiserPOCOrderByInput, {nullable:true})
    pointOfContact?: AdvertiserPOCOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AdOrderByRelationAggregateInput, {nullable:true})
    ads?: AdOrderByRelationAggregateInput;
}
