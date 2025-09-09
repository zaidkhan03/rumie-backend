import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryCreateManyInput } from './weight-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWeightCategoryArgs {

    @Field(() => [WeightCategoryCreateManyInput], {nullable:false})
    @Type(() => WeightCategoryCreateManyInput)
    data!: Array<WeightCategoryCreateManyInput>;
}
