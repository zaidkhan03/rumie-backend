import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StoryMediaOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    duration?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: `${SortOrder}`;
}
