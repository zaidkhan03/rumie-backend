import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LegacyImagesWhereInput } from './legacy-images-where.input';
import { Type } from 'class-transformer';
import { LegacyImagesOrderByWithAggregationInput } from './legacy-images-order-by-with-aggregation.input';
import { LegacyImagesScalarFieldEnum } from './legacy-images-scalar-field.enum';
import { LegacyImagesScalarWhereWithAggregatesInput } from './legacy-images-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LegacyImagesCountAggregateInput } from './legacy-images-count-aggregate.input';
import { LegacyImagesMinAggregateInput } from './legacy-images-min-aggregate.input';
import { LegacyImagesMaxAggregateInput } from './legacy-images-max-aggregate.input';

@ArgsType()
export class LegacyImagesGroupByArgs {

    @Field(() => LegacyImagesWhereInput, {nullable:true})
    @Type(() => LegacyImagesWhereInput)
    where?: LegacyImagesWhereInput;

    @Field(() => [LegacyImagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LegacyImagesOrderByWithAggregationInput>;

    @Field(() => [LegacyImagesScalarFieldEnum], {nullable:false})
    by!: Array<`${LegacyImagesScalarFieldEnum}`>;

    @Field(() => LegacyImagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: LegacyImagesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LegacyImagesCountAggregateInput, {nullable:true})
    _count?: LegacyImagesCountAggregateInput;

    @Field(() => LegacyImagesMinAggregateInput, {nullable:true})
    _min?: LegacyImagesMinAggregateInput;

    @Field(() => LegacyImagesMaxAggregateInput, {nullable:true})
    _max?: LegacyImagesMaxAggregateInput;
}
