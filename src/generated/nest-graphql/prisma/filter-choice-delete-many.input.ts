import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterChoiceWhereInput } from '../filter-choice/filter-choice-where.input';
import { Type } from 'class-transformer';

@InputType()
export class FilterChoiceDeleteManyInput {

    @Field(() => FilterChoiceWhereInput, {nullable:false})
    @Type(() => FilterChoiceWhereInput)
    where!: FilterChoiceWhereInput;
}
