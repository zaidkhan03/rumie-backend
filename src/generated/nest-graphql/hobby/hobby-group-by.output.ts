import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HobbyCountAggregate } from './hobby-count-aggregate.output';
import { HobbyMinAggregate } from './hobby-min-aggregate.output';
import { HobbyMaxAggregate } from './hobby-max-aggregate.output';

@ObjectType()
export class HobbyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => [String], {nullable:true})
    userIds?: Array<string>;

    @Field(() => HobbyCountAggregate, {nullable:true})
    _count?: HobbyCountAggregate;

    @Field(() => HobbyMinAggregate, {nullable:true})
    _min?: HobbyMinAggregate;

    @Field(() => HobbyMaxAggregate, {nullable:true})
    _max?: HobbyMaxAggregate;
}
