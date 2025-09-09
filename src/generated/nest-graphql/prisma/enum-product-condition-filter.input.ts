import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCondition } from './product-condition.enum';
import { NestedEnumProductConditionFilter } from './nested-enum-product-condition-filter.input';

@InputType()
export class EnumProductConditionFilter {

    @Field(() => ProductCondition, {nullable:true})
    equals?: `${ProductCondition}`;

    @Field(() => [ProductCondition], {nullable:true})
    in?: Array<`${ProductCondition}`>;

    @Field(() => [ProductCondition], {nullable:true})
    notIn?: Array<`${ProductCondition}`>;

    @Field(() => NestedEnumProductConditionFilter, {nullable:true})
    not?: NestedEnumProductConditionFilter;
}
