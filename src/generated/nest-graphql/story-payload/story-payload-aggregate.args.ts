import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryPayloadWhereInput } from './story-payload-where.input';
import { Type } from 'class-transformer';
import { StoryPayloadOrderByWithRelationInput } from './story-payload-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StoryPayloadWhereUniqueInput } from './story-payload-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoryPayloadCountAggregateInput } from './story-payload-count-aggregate.input';
import { StoryPayloadMinAggregateInput } from './story-payload-min-aggregate.input';
import { StoryPayloadMaxAggregateInput } from './story-payload-max-aggregate.input';

@ArgsType()
export class StoryPayloadAggregateArgs {

    @Field(() => StoryPayloadWhereInput, {nullable:true})
    @Type(() => StoryPayloadWhereInput)
    where?: StoryPayloadWhereInput;

    @Field(() => [StoryPayloadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryPayloadOrderByWithRelationInput>;

    @Field(() => StoryPayloadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoryPayloadWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StoryPayloadCountAggregateInput, {nullable:true})
    _count?: StoryPayloadCountAggregateInput;

    @Field(() => StoryPayloadMinAggregateInput, {nullable:true})
    _min?: StoryPayloadMinAggregateInput;

    @Field(() => StoryPayloadMaxAggregateInput, {nullable:true})
    _max?: StoryPayloadMaxAggregateInput;
}
