import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterChoiceWhereInput } from './filter-choice-where.input';
import { Type } from 'class-transformer';
import { FilterChoiceUpdateInput } from './filter-choice-update.input';

@InputType()
export class FilterChoiceUpdateManyInput {

    @Field(() => FilterChoiceWhereInput, {nullable:false})
    @Type(() => FilterChoiceWhereInput)
    where!: FilterChoiceWhereInput;

    @Field(() => FilterChoiceUpdateInput, {nullable:false})
    @Type(() => FilterChoiceUpdateInput)
    data!: FilterChoiceUpdateInput;
}
