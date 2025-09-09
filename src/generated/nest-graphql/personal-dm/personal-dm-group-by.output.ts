import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PersonalDMCountAggregate } from './personal-dm-count-aggregate.output';
import { PersonalDMMinAggregate } from './personal-dm-min-aggregate.output';
import { PersonalDMMaxAggregate } from './personal-dm-max-aggregate.output';

@ObjectType()
export class PersonalDMGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    initiatedBy!: string;

    @Field(() => [String], {nullable:true})
    participantIds?: Array<string>;

    @Field(() => String, {nullable:true})
    lastMessageId?: string;

    @Field(() => Boolean, {nullable:false})
    valid!: boolean;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => String, {nullable:true})
    payload?: string;

    @Field(() => String, {nullable:true})
    consumersLastSeen?: string;

    @Field(() => String, {nullable:true})
    providersLastSeen?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PersonalDMCountAggregate, {nullable:true})
    _count?: PersonalDMCountAggregate;

    @Field(() => PersonalDMMinAggregate, {nullable:true})
    _min?: PersonalDMMinAggregate;

    @Field(() => PersonalDMMaxAggregate, {nullable:true})
    _max?: PersonalDMMaxAggregate;
}
