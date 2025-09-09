import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MediaItemOrderByInput } from '../media-item/media-item-order-by.input';

@InputType()
export class ProductShareCampusChatPayloadOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priceString?: `${SortOrder}`;

    @Field(() => MediaItemOrderByInput, {nullable:true})
    mediaItem?: MediaItemOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text?: `${SortOrder}`;
}
