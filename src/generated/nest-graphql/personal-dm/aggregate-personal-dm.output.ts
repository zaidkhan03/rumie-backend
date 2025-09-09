import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PersonalDMCountAggregate } from './personal-dm-count-aggregate.output';
import { PersonalDMMinAggregate } from './personal-dm-min-aggregate.output';
import { PersonalDMMaxAggregate } from './personal-dm-max-aggregate.output';

@ObjectType()
export class AggregatePersonalDM {

    @Field(() => PersonalDMCountAggregate, {nullable:true})
    _count?: PersonalDMCountAggregate;

    @Field(() => PersonalDMMinAggregate, {nullable:true})
    _min?: PersonalDMMinAggregate;

    @Field(() => PersonalDMMaxAggregate, {nullable:true})
    _max?: PersonalDMMaxAggregate;
}
