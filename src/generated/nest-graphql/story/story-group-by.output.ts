import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoryType } from '../prisma/story-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { StoryCountAggregate } from './story-count-aggregate.output';
import { StoryAvgAggregate } from './story-avg-aggregate.output';
import { StorySumAggregate } from './story-sum-aggregate.output';
import { StoryMinAggregate } from './story-min-aggregate.output';
import { StoryMaxAggregate } from './story-max-aggregate.output';

@ObjectType()
export class StoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => StoryType, {nullable:false})
    type!: `${StoryType}`;

    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => String, {nullable:true})
    backgroundColor?: string;

    @Field(() => Int, {nullable:false})
    viewCount!: number;

    @Field(() => String, {nullable:false})
    eduInstituteId!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    archived!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => StoryCountAggregate, {nullable:true})
    _count?: StoryCountAggregate;

    @Field(() => StoryAvgAggregate, {nullable:true})
    _avg?: StoryAvgAggregate;

    @Field(() => StorySumAggregate, {nullable:true})
    _sum?: StorySumAggregate;

    @Field(() => StoryMinAggregate, {nullable:true})
    _min?: StoryMinAggregate;

    @Field(() => StoryMaxAggregate, {nullable:true})
    _max?: StoryMaxAggregate;
}
