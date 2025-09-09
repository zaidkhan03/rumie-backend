import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryUpdateInput } from './weight-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WeightCategoryWhereUniqueInput } from './weight-category-where-unique.input';

@ArgsType()
export class UpdateOneWeightCategoryArgs {

    @Field(() => WeightCategoryUpdateInput, {nullable:false})
    @Type(() => WeightCategoryUpdateInput)
    data!: WeightCategoryUpdateInput;

    @Field(() => WeightCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WeightCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WeightCategoryWhereUniqueInput, 'id'>;
}
