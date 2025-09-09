import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DMMessageTypeScalarWhereWithAggregatesInput {

    @Field(() => [DMMessageTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DMMessageTypeScalarWhereWithAggregatesInput>;

    @Field(() => [DMMessageTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DMMessageTypeScalarWhereWithAggregatesInput>;

    @Field(() => [DMMessageTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DMMessageTypeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}
