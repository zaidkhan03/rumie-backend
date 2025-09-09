import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinWhereInput } from './app-lovin-where.input';
import { Type } from 'class-transformer';
import { AppLovinOrderByWithAggregationInput } from './app-lovin-order-by-with-aggregation.input';
import { AppLovinScalarFieldEnum } from './app-lovin-scalar-field.enum';
import { AppLovinScalarWhereWithAggregatesInput } from './app-lovin-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AppLovinCountAggregateInput } from './app-lovin-count-aggregate.input';
import { AppLovinMinAggregateInput } from './app-lovin-min-aggregate.input';
import { AppLovinMaxAggregateInput } from './app-lovin-max-aggregate.input';

@ArgsType()
export class AppLovinGroupByArgs {

    @Field(() => AppLovinWhereInput, {nullable:true})
    @Type(() => AppLovinWhereInput)
    where?: AppLovinWhereInput;

    @Field(() => [AppLovinOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AppLovinOrderByWithAggregationInput>;

    @Field(() => [AppLovinScalarFieldEnum], {nullable:false})
    by!: Array<`${AppLovinScalarFieldEnum}`>;

    @Field(() => AppLovinScalarWhereWithAggregatesInput, {nullable:true})
    having?: AppLovinScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AppLovinCountAggregateInput, {nullable:true})
    _count?: AppLovinCountAggregateInput;

    @Field(() => AppLovinMinAggregateInput, {nullable:true})
    _min?: AppLovinMinAggregateInput;

    @Field(() => AppLovinMaxAggregateInput, {nullable:true})
    _max?: AppLovinMaxAggregateInput;
}
