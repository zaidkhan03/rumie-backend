import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ProductBubbleWhereInput {

    @Field(() => [ProductBubbleWhereInput], {nullable:true})
    AND?: Array<ProductBubbleWhereInput>;

    @Field(() => [ProductBubbleWhereInput], {nullable:true})
    OR?: Array<ProductBubbleWhereInput>;

    @Field(() => [ProductBubbleWhereInput], {nullable:true})
    NOT?: Array<ProductBubbleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    mediaType?: StringFilter;
}
