import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationPayloadsWhereInput } from './notification-payloads-where.input';
import { Type } from 'class-transformer';
import { NotificationPayloadsOrderByWithAggregationInput } from './notification-payloads-order-by-with-aggregation.input';
import { NotificationPayloadsScalarFieldEnum } from './notification-payloads-scalar-field.enum';
import { NotificationPayloadsScalarWhereWithAggregatesInput } from './notification-payloads-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotificationPayloadsCountAggregateInput } from './notification-payloads-count-aggregate.input';
import { NotificationPayloadsMinAggregateInput } from './notification-payloads-min-aggregate.input';
import { NotificationPayloadsMaxAggregateInput } from './notification-payloads-max-aggregate.input';

@ArgsType()
export class NotificationPayloadsGroupByArgs {

    @Field(() => NotificationPayloadsWhereInput, {nullable:true})
    @Type(() => NotificationPayloadsWhereInput)
    where?: NotificationPayloadsWhereInput;

    @Field(() => [NotificationPayloadsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotificationPayloadsOrderByWithAggregationInput>;

    @Field(() => [NotificationPayloadsScalarFieldEnum], {nullable:false})
    by!: Array<`${NotificationPayloadsScalarFieldEnum}`>;

    @Field(() => NotificationPayloadsScalarWhereWithAggregatesInput, {nullable:true})
    having?: NotificationPayloadsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotificationPayloadsCountAggregateInput, {nullable:true})
    _count?: NotificationPayloadsCountAggregateInput;

    @Field(() => NotificationPayloadsMinAggregateInput, {nullable:true})
    _min?: NotificationPayloadsMinAggregateInput;

    @Field(() => NotificationPayloadsMaxAggregateInput, {nullable:true})
    _max?: NotificationPayloadsMaxAggregateInput;
}
