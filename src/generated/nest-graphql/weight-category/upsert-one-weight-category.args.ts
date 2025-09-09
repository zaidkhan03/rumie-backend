import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WeightCategoryWhereUniqueInput } from './weight-category-where-unique.input';
import { Type } from 'class-transformer';
import { WeightCategoryCreateInput } from './weight-category-create.input';
import { WeightCategoryUpdateInput } from './weight-category-update.input';

@ArgsType()
export class UpsertOneWeightCategoryArgs {

    @Field(() => WeightCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WeightCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WeightCategoryWhereUniqueInput, 'id'>;

    @Field(() => WeightCategoryCreateInput, {nullable:false})
    @Type(() => WeightCategoryCreateInput)
    create!: WeightCategoryCreateInput;

    @Field(() => WeightCategoryUpdateInput, {nullable:false})
    @Type(() => WeightCategoryUpdateInput)
    update!: WeightCategoryUpdateInput;
}
