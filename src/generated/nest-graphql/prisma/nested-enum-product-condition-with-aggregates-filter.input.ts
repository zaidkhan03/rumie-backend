import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCondition } from './product-condition.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProductConditionFilter } from './nested-enum-product-condition-filter.input';

@InputType()
export class NestedEnumProductConditionWithAggregatesFilter {

    @Field(() => ProductCondition, {nullable:true})
    equals?: `${ProductCondition}`;

    @Field(() => [ProductCondition], {nullable:true})
    in?: Array<`${ProductCondition}`>;

    @Field(() => [ProductCondition], {nullable:true})
    notIn?: Array<`${ProductCondition}`>;

    @Field(() => NestedEnumProductConditionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProductConditionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProductConditionFilter, {nullable:true})
    _min?: NestedEnumProductConditionFilter;

    @Field(() => NestedEnumProductConditionFilter, {nullable:true})
    _max?: NestedEnumProductConditionFilter;
}
