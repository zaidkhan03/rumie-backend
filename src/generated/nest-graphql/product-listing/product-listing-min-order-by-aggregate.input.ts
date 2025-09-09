import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProductListingMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    brandId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    colorId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productCondition?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productDeliveryMode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingChargePayer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    weightCategoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priceString?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reasonForSelling?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingEnabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFrom?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    soldOut?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    blackListed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    legacyHash?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    archived?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryPreferredGender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaderEduInstituteId?: `${SortOrder}`;
}
