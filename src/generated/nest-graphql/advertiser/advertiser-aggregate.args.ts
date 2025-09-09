import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdvertiserWhereInput } from './advertiser-where.input';
import { Type } from 'class-transformer';
import { AdvertiserOrderByWithRelationInput } from './advertiser-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdvertiserWhereUniqueInput } from './advertiser-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdvertiserCountAggregateInput } from './advertiser-count-aggregate.input';
import { AdvertiserMinAggregateInput } from './advertiser-min-aggregate.input';
import { AdvertiserMaxAggregateInput } from './advertiser-max-aggregate.input';

@ArgsType()
export class AdvertiserAggregateArgs {

    @Field(() => AdvertiserWhereInput, {nullable:true})
    @Type(() => AdvertiserWhereInput)
    where?: AdvertiserWhereInput;

    @Field(() => [AdvertiserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdvertiserOrderByWithRelationInput>;

    @Field(() => AdvertiserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdvertiserWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdvertiserCountAggregateInput, {nullable:true})
    _count?: AdvertiserCountAggregateInput;

    @Field(() => AdvertiserMinAggregateInput, {nullable:true})
    _min?: AdvertiserMinAggregateInput;

    @Field(() => AdvertiserMaxAggregateInput, {nullable:true})
    _max?: AdvertiserMaxAggregateInput;
}
