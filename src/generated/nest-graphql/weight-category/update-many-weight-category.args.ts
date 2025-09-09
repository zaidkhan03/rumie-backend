import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryUpdateManyMutationInput } from './weight-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WeightCategoryWhereInput } from './weight-category-where.input';

@ArgsType()
export class UpdateManyWeightCategoryArgs {

    @Field(() => WeightCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => WeightCategoryUpdateManyMutationInput)
    data!: WeightCategoryUpdateManyMutationInput;

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    where?: WeightCategoryWhereInput;
}
