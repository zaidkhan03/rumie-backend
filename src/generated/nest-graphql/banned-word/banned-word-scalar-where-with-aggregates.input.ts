import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BannedWordScalarWhereWithAggregatesInput {

    @Field(() => [BannedWordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BannedWordScalarWhereWithAggregatesInput>;

    @Field(() => [BannedWordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BannedWordScalarWhereWithAggregatesInput>;

    @Field(() => [BannedWordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BannedWordScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    word?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
