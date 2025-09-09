import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Type } from 'class-transformer';
import { EduInstituteOrderByWithAggregationInput } from './edu-institute-order-by-with-aggregation.input';
import { EduInstituteScalarFieldEnum } from './edu-institute-scalar-field.enum';
import { EduInstituteScalarWhereWithAggregatesInput } from './edu-institute-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EduInstituteCountAggregateInput } from './edu-institute-count-aggregate.input';
import { EduInstituteMinAggregateInput } from './edu-institute-min-aggregate.input';
import { EduInstituteMaxAggregateInput } from './edu-institute-max-aggregate.input';

@ArgsType()
export class EduInstituteGroupByArgs {

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;

    @Field(() => [EduInstituteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EduInstituteOrderByWithAggregationInput>;

    @Field(() => [EduInstituteScalarFieldEnum], {nullable:false})
    by!: Array<`${EduInstituteScalarFieldEnum}`>;

    @Field(() => EduInstituteScalarWhereWithAggregatesInput, {nullable:true})
    having?: EduInstituteScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EduInstituteCountAggregateInput, {nullable:true})
    _count?: EduInstituteCountAggregateInput;

    @Field(() => EduInstituteMinAggregateInput, {nullable:true})
    _min?: EduInstituteMinAggregateInput;

    @Field(() => EduInstituteMaxAggregateInput, {nullable:true})
    _max?: EduInstituteMaxAggregateInput;
}
