import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryWhereInput } from './weight-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWeightCategoryArgs {

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    where?: WeightCategoryWhereInput;
}
