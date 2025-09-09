import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShoppingPreferenceCountAggregate } from './shopping-preference-count-aggregate.output';
import { ShoppingPreferenceMinAggregate } from './shopping-preference-min-aggregate.output';
import { ShoppingPreferenceMaxAggregate } from './shopping-preference-max-aggregate.output';

@ObjectType()
export class ShoppingPreferenceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => [String], {nullable:true})
    userIds?: Array<string>;

    @Field(() => ShoppingPreferenceCountAggregate, {nullable:true})
    _count?: ShoppingPreferenceCountAggregate;

    @Field(() => ShoppingPreferenceMinAggregate, {nullable:true})
    _min?: ShoppingPreferenceMinAggregate;

    @Field(() => ShoppingPreferenceMaxAggregate, {nullable:true})
    _max?: ShoppingPreferenceMaxAggregate;
}
