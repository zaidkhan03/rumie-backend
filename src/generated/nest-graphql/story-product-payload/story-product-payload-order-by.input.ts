import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StoryProductPayloadOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fontColor?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    textPosX?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    textPosY?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    textHexCode?: `${SortOrder}`;
}
