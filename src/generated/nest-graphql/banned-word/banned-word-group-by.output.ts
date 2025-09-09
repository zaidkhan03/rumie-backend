import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BannedWordCountAggregate } from './banned-word-count-aggregate.output';
import { BannedWordMinAggregate } from './banned-word-min-aggregate.output';
import { BannedWordMaxAggregate } from './banned-word-max-aggregate.output';

@ObjectType()
export class BannedWordGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    word!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BannedWordCountAggregate, {nullable:true})
    _count?: BannedWordCountAggregate;

    @Field(() => BannedWordMinAggregate, {nullable:true})
    _min?: BannedWordMinAggregate;

    @Field(() => BannedWordMaxAggregate, {nullable:true})
    _max?: BannedWordMaxAggregate;
}
