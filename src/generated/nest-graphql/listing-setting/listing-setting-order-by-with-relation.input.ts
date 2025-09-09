import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NameAndImageOrderByCompositeAggregateInput } from '../name-and-image/name-and-image-order-by-composite-aggregate.input';

@InputType()
export class ListingSettingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enableSelling?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enableRenting?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reasonsForSelling?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    meetupPreferences?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productDeliveryModes?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerFees?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxes?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    creditProcessing?: `${SortOrder}`;

    @Field(() => NameAndImageOrderByCompositeAggregateInput, {nullable:true})
    genders?: NameAndImageOrderByCompositeAggregateInput;

    @Field(() => NameAndImageOrderByCompositeAggregateInput, {nullable:true})
    conditions?: NameAndImageOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
