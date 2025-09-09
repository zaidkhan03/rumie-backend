import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdvertiserCountAggregate } from './advertiser-count-aggregate.output';
import { AdvertiserMinAggregate } from './advertiser-min-aggregate.output';
import { AdvertiserMaxAggregate } from './advertiser-max-aggregate.output';

@ObjectType()
export class AggregateAdvertiser {

    @Field(() => AdvertiserCountAggregate, {nullable:true})
    _count?: AdvertiserCountAggregate;

    @Field(() => AdvertiserMinAggregate, {nullable:true})
    _min?: AdvertiserMinAggregate;

    @Field(() => AdvertiserMaxAggregate, {nullable:true})
    _max?: AdvertiserMaxAggregate;
}
