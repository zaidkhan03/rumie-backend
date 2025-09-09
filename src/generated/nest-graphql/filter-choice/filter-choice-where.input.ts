import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FilterChoiceWhereInput {

    @Field(() => [FilterChoiceWhereInput], {nullable:true})
    AND?: Array<FilterChoiceWhereInput>;

    @Field(() => [FilterChoiceWhereInput], {nullable:true})
    OR?: Array<FilterChoiceWhereInput>;

    @Field(() => [FilterChoiceWhereInput], {nullable:true})
    NOT?: Array<FilterChoiceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;
}
