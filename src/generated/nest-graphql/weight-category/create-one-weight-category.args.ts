import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryCreateInput } from './weight-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWeightCategoryArgs {

    @Field(() => WeightCategoryCreateInput, {nullable:false})
    @Type(() => WeightCategoryCreateInput)
    data!: WeightCategoryCreateInput;
}
