import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LegacyImagesWhereInput } from './legacy-images-where.input';
import { Type } from 'class-transformer';
import { LegacyImagesOrderByWithRelationInput } from './legacy-images-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LegacyImagesWhereUniqueInput } from './legacy-images-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LegacyImagesCountAggregateInput } from './legacy-images-count-aggregate.input';
import { LegacyImagesMinAggregateInput } from './legacy-images-min-aggregate.input';
import { LegacyImagesMaxAggregateInput } from './legacy-images-max-aggregate.input';

@ArgsType()
export class LegacyImagesAggregateArgs {

    @Field(() => LegacyImagesWhereInput, {nullable:true})
    @Type(() => LegacyImagesWhereInput)
    where?: LegacyImagesWhereInput;

    @Field(() => [LegacyImagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LegacyImagesOrderByWithRelationInput>;

    @Field(() => LegacyImagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LegacyImagesWhereUniqueInput, 'id' | 'oldUrl'>;

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
