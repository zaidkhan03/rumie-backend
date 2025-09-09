import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PrivacyPolicyCountAggregate } from './privacy-policy-count-aggregate.output';
import { PrivacyPolicyMinAggregate } from './privacy-policy-min-aggregate.output';
import { PrivacyPolicyMaxAggregate } from './privacy-policy-max-aggregate.output';

@ObjectType()
export class AggregatePrivacyPolicy {

    @Field(() => PrivacyPolicyCountAggregate, {nullable:true})
    _count?: PrivacyPolicyCountAggregate;

    @Field(() => PrivacyPolicyMinAggregate, {nullable:true})
    _min?: PrivacyPolicyMinAggregate;

    @Field(() => PrivacyPolicyMaxAggregate, {nullable:true})
    _max?: PrivacyPolicyMaxAggregate;
}
