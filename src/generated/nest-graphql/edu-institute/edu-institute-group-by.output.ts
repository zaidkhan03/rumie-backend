import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EduInstituteCountAggregate } from './edu-institute-count-aggregate.output';
import { EduInstituteMinAggregate } from './edu-institute-min-aggregate.output';
import { EduInstituteMaxAggregate } from './edu-institute-max-aggregate.output';

@ObjectType()
export class EduInstituteGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:true})
    logo?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zip!: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    passCode?: string;

    @Field(() => Boolean, {nullable:true})
    isRegistered?: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => EduInstituteCountAggregate, {nullable:true})
    _count?: EduInstituteCountAggregate;

    @Field(() => EduInstituteMinAggregate, {nullable:true})
    _min?: EduInstituteMinAggregate;

    @Field(() => EduInstituteMaxAggregate, {nullable:true})
    _max?: EduInstituteMaxAggregate;
}
