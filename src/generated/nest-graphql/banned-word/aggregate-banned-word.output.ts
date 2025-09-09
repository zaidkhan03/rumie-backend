import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BannedWordCountAggregate } from './banned-word-count-aggregate.output';
import { BannedWordMinAggregate } from './banned-word-min-aggregate.output';
import { BannedWordMaxAggregate } from './banned-word-max-aggregate.output';

@ObjectType()
export class AggregateBannedWord {

    @Field(() => BannedWordCountAggregate, {nullable:true})
    _count?: BannedWordCountAggregate;

    @Field(() => BannedWordMinAggregate, {nullable:true})
    _min?: BannedWordMinAggregate;

    @Field(() => BannedWordMaxAggregate, {nullable:true})
    _max?: BannedWordMaxAggregate;
}
