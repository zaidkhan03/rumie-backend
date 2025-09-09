import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class NotificationPayloadsScalarWhereWithAggregatesInput {

    @Field(() => [NotificationPayloadsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationPayloadsScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationPayloadsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationPayloadsScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationPayloadsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationPayloadsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}
