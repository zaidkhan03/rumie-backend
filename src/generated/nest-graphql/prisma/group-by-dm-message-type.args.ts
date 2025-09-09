import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeWhereInput } from '../dm-message-type/dm-message-type-where.input';
import { Type } from 'class-transformer';
import { DMMessageTypeOrderByWithAggregationInput } from '../dm-message-type/dm-message-type-order-by-with-aggregation.input';
import { DMMessageTypeScalarFieldEnum } from '../dm-message-type/dm-message-type-scalar-field.enum';
import { DMMessageTypeScalarWhereWithAggregatesInput } from '../dm-message-type/dm-message-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByDmMessageTypeArgs {

    @Field(() => DMMessageTypeWhereInput, {nullable:true})
    @Type(() => DMMessageTypeWhereInput)
    where?: DMMessageTypeWhereInput;

    @Field(() => [DMMessageTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DMMessageTypeOrderByWithAggregationInput>;

    @Field(() => [DMMessageTypeScalarFieldEnum], {nullable:false})
    by!: Array<`${DMMessageTypeScalarFieldEnum}`>;

    @Field(() => DMMessageTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: DMMessageTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
