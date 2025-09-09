import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WeightCategoryWhereInput } from './weight-category-where.input';

@InputType()
export class WeightCategoryNullableRelationFilter {

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    is?: WeightCategoryWhereInput;

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    isNot?: WeightCategoryWhereInput;
}
