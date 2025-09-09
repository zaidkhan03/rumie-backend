import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterChoiceObjectEqualityInput } from './filter-choice-object-equality.input';
import { FilterChoiceWhereInput } from '../filter-choice/filter-choice-where.input';

@InputType()
export class FilterChoiceCompositeListFilter {

    @Field(() => [FilterChoiceObjectEqualityInput], {nullable:true})
    equals?: Array<FilterChoiceObjectEqualityInput>;

    @Field(() => FilterChoiceWhereInput, {nullable:true})
    every?: FilterChoiceWhereInput;

    @Field(() => FilterChoiceWhereInput, {nullable:true})
    some?: FilterChoiceWhereInput;

    @Field(() => FilterChoiceWhereInput, {nullable:true})
    none?: FilterChoiceWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
