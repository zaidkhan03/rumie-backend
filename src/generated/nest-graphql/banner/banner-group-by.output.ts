import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BannerType } from '../prisma/banner-type.enum';
import { BannerPosition } from '../prisma/banner-position.enum';
import { BannerCountAggregate } from './banner-count-aggregate.output';
import { BannerMinAggregate } from './banner-min-aggregate.output';
import { BannerMaxAggregate } from './banner-max-aggregate.output';

@ObjectType()
export class BannerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BannerType, {nullable:false})
    type!: `${BannerType}`;

    @Field(() => [BannerPosition], {nullable:true})
    positions?: Array<`${BannerPosition}`>;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BannerCountAggregate, {nullable:true})
    _count?: BannerCountAggregate;

    @Field(() => BannerMinAggregate, {nullable:true})
    _min?: BannerMinAggregate;

    @Field(() => BannerMaxAggregate, {nullable:true})
    _max?: BannerMaxAggregate;
}
