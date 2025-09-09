import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EduInstituteCountAggregate } from './edu-institute-count-aggregate.output';
import { EduInstituteMinAggregate } from './edu-institute-min-aggregate.output';
import { EduInstituteMaxAggregate } from './edu-institute-max-aggregate.output';

@ObjectType()
export class AggregateEduInstitute {

    @Field(() => EduInstituteCountAggregate, {nullable:true})
    _count?: EduInstituteCountAggregate;

    @Field(() => EduInstituteMinAggregate, {nullable:true})
    _min?: EduInstituteMinAggregate;

    @Field(() => EduInstituteMaxAggregate, {nullable:true})
    _max?: EduInstituteMaxAggregate;
}
