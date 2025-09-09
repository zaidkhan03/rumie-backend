import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinWhereInput } from './app-lovin-where.input';
import { Type } from 'class-transformer';
import { AppLovinOrderByWithRelationInput } from './app-lovin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppLovinWhereUniqueInput } from './app-lovin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppLovinCountAggregateInput } from './app-lovin-count-aggregate.input';
import { AppLovinMinAggregateInput } from './app-lovin-min-aggregate.input';
import { AppLovinMaxAggregateInput } from './app-lovin-max-aggregate.input';

@ArgsType()
export class AppLovinAggregateArgs {

    @Field(() => AppLovinWhereInput, {nullable:true})
    @Type(() => AppLovinWhereInput)
    where?: AppLovinWhereInput;

    @Field(() => [AppLovinOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppLovinOrderByWithRelationInput>;

    @Field(() => AppLovinWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppLovinWhereUniqueInput, 'id'>;

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
