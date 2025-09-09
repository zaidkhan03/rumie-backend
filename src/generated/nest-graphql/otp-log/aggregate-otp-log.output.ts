import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OtpLogCountAggregate } from './otp-log-count-aggregate.output';
import { OtpLogMinAggregate } from './otp-log-min-aggregate.output';
import { OtpLogMaxAggregate } from './otp-log-max-aggregate.output';

@ObjectType()
export class AggregateOtpLog {

    @Field(() => OtpLogCountAggregate, {nullable:true})
    _count?: OtpLogCountAggregate;

    @Field(() => OtpLogMinAggregate, {nullable:true})
    _min?: OtpLogMinAggregate;

    @Field(() => OtpLogMaxAggregate, {nullable:true})
    _max?: OtpLogMaxAggregate;
}
