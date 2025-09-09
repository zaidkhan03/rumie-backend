import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BrandCountAggregate } from './brand-count-aggregate.output';
import { BrandMinAggregate } from './brand-min-aggregate.output';
import { BrandMaxAggregate } from './brand-max-aggregate.output';

@ObjectType()
export class BrandGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    featured!: boolean;

    @Field(() => BrandCountAggregate, {nullable:true})
    _count?: BrandCountAggregate;

    @Field(() => BrandMinAggregate, {nullable:true})
    _min?: BrandMinAggregate;

    @Field(() => BrandMaxAggregate, {nullable:true})
    _max?: BrandMaxAggregate;
}
