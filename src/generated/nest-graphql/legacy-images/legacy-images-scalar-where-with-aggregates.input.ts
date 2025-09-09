import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LegacyImagesScalarWhereWithAggregatesInput {

    @Field(() => [LegacyImagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LegacyImagesScalarWhereWithAggregatesInput>;

    @Field(() => [LegacyImagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LegacyImagesScalarWhereWithAggregatesInput>;

    @Field(() => [LegacyImagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LegacyImagesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    oldUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    newUrl?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
