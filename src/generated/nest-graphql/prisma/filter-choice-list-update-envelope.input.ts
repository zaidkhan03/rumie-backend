import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterChoiceCreateInput } from '../filter-choice/filter-choice-create.input';
import { Type } from 'class-transformer';
import { FilterChoiceUpdateManyInput } from '../filter-choice/filter-choice-update-many.input';
import { FilterChoiceDeleteManyInput } from './filter-choice-delete-many.input';

@InputType()
export class FilterChoiceListUpdateEnvelopeInput {

    @Field(() => [FilterChoiceCreateInput], {nullable:true})
    @Type(() => FilterChoiceCreateInput)
    set?: Array<FilterChoiceCreateInput>;

    @Field(() => [FilterChoiceCreateInput], {nullable:true})
    push?: Array<FilterChoiceCreateInput>;

    @Field(() => FilterChoiceUpdateManyInput, {nullable:true})
    @Type(() => FilterChoiceUpdateManyInput)
    updateMany?: FilterChoiceUpdateManyInput;

    @Field(() => FilterChoiceDeleteManyInput, {nullable:true})
    @Type(() => FilterChoiceDeleteManyInput)
    deleteMany?: FilterChoiceDeleteManyInput;
}
