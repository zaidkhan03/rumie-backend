import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryWhereInput } from './weight-category-where.input';
import { Type } from 'class-transformer';
import { WeightCategoryOrderByWithRelationInput } from './weight-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WeightCategoryWhereUniqueInput } from './weight-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WeightCategoryScalarFieldEnum } from './weight-category-scalar-field.enum';

@ArgsType()
export class FindFirstWeightCategoryArgs {

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    where?: WeightCategoryWhereInput;

    @Field(() => [WeightCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WeightCategoryOrderByWithRelationInput>;

    @Field(() => WeightCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WeightCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WeightCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${WeightCategoryScalarFieldEnum}`>;
}
