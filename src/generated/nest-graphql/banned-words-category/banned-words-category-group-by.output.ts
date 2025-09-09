import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BannedWordsCategoryCountAggregate } from './banned-words-category-count-aggregate.output';
import { BannedWordsCategoryAvgAggregate } from './banned-words-category-avg-aggregate.output';
import { BannedWordsCategorySumAggregate } from './banned-words-category-sum-aggregate.output';
import { BannedWordsCategoryMinAggregate } from './banned-words-category-min-aggregate.output';
import { BannedWordsCategoryMaxAggregate } from './banned-words-category-max-aggregate.output';

@ObjectType()
export class BannedWordsCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    severity!: number;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BannedWordsCategoryCountAggregate, {nullable:true})
    _count?: BannedWordsCategoryCountAggregate;

    @Field(() => BannedWordsCategoryAvgAggregate, {nullable:true})
    _avg?: BannedWordsCategoryAvgAggregate;

    @Field(() => BannedWordsCategorySumAggregate, {nullable:true})
    _sum?: BannedWordsCategorySumAggregate;

    @Field(() => BannedWordsCategoryMinAggregate, {nullable:true})
    _min?: BannedWordsCategoryMinAggregate;

    @Field(() => BannedWordsCategoryMaxAggregate, {nullable:true})
    _max?: BannedWordsCategoryMaxAggregate;
}
