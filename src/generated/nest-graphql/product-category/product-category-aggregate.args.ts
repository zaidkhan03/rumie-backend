import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryOrderByWithRelationInput } from './product-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductCategoryCountAggregateInput } from './product-category-count-aggregate.input';
import { ProductCategoryMinAggregateInput } from './product-category-min-aggregate.input';
import { ProductCategoryMaxAggregateInput } from './product-category-max-aggregate.input';

@ArgsType()
export class ProductCategoryAggregateArgs {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;

    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductCategoryCountAggregateInput, {nullable:true})
    _count?: ProductCategoryCountAggregateInput;

    @Field(() => ProductCategoryMinAggregateInput, {nullable:true})
    _min?: ProductCategoryMinAggregateInput;

    @Field(() => ProductCategoryMaxAggregateInput, {nullable:true})
    _max?: ProductCategoryMaxAggregateInput;
}
