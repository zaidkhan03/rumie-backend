import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CampusChatMessagePayloadScalarWhereWithAggregatesInput {

    @Field(() => [CampusChatMessagePayloadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CampusChatMessagePayloadScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatMessagePayloadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CampusChatMessagePayloadScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatMessagePayloadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CampusChatMessagePayloadScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}
