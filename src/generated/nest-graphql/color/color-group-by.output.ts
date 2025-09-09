import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ColorCountAggregate } from './color-count-aggregate.output';
import { ColorMinAggregate } from './color-min-aggregate.output';
import { ColorMaxAggregate } from './color-max-aggregate.output';

@ObjectType()
export class ColorGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    hex!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ColorCountAggregate, {nullable:true})
    _count?: ColorCountAggregate;

    @Field(() => ColorMinAggregate, {nullable:true})
    _min?: ColorMinAggregate;

    @Field(() => ColorMaxAggregate, {nullable:true})
    _max?: ColorMaxAggregate;
}
