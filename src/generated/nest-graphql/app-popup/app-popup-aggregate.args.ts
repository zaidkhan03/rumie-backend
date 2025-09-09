import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppPopupWhereInput } from './app-popup-where.input';
import { Type } from 'class-transformer';
import { AppPopupOrderByWithRelationInput } from './app-popup-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppPopupWhereUniqueInput } from './app-popup-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppPopupCountAggregateInput } from './app-popup-count-aggregate.input';
import { AppPopupAvgAggregateInput } from './app-popup-avg-aggregate.input';
import { AppPopupSumAggregateInput } from './app-popup-sum-aggregate.input';
import { AppPopupMinAggregateInput } from './app-popup-min-aggregate.input';
import { AppPopupMaxAggregateInput } from './app-popup-max-aggregate.input';

@ArgsType()
export class AppPopupAggregateArgs {

    @Field(() => AppPopupWhereInput, {nullable:true})
    @Type(() => AppPopupWhereInput)
    where?: AppPopupWhereInput;

    @Field(() => [AppPopupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppPopupOrderByWithRelationInput>;

    @Field(() => AppPopupWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppPopupWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AppPopupCountAggregateInput, {nullable:true})
    _count?: AppPopupCountAggregateInput;

    @Field(() => AppPopupAvgAggregateInput, {nullable:true})
    _avg?: AppPopupAvgAggregateInput;

    @Field(() => AppPopupSumAggregateInput, {nullable:true})
    _sum?: AppPopupSumAggregateInput;

    @Field(() => AppPopupMinAggregateInput, {nullable:true})
    _min?: AppPopupMinAggregateInput;

    @Field(() => AppPopupMaxAggregateInput, {nullable:true})
    _max?: AppPopupMaxAggregateInput;
}
