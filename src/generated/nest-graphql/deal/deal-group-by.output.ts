import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DealType } from '../prisma/deal-type.enum';
import { DealCountAggregate } from './deal-count-aggregate.output';
import { DealMinAggregate } from './deal-min-aggregate.output';
import { DealMaxAggregate } from './deal-max-aggregate.output';

@ObjectType()
export class DealGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => DealType, {nullable:false})
    type!: `${DealType}`;

    @Field(() => String, {nullable:false})
    couponCode!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => [String], {nullable:true})
    savedUserIds?: Array<string>;

    @Field(() => DealCountAggregate, {nullable:true})
    _count?: DealCountAggregate;

    @Field(() => DealMinAggregate, {nullable:true})
    _min?: DealMinAggregate;

    @Field(() => DealMaxAggregate, {nullable:true})
    _max?: DealMaxAggregate;
}
