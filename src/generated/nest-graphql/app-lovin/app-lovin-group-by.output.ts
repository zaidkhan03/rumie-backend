import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppLovingAdType } from '../prisma/app-loving-ad-type.enum';
import { AppLovinPosition } from '../prisma/app-lovin-position.enum';
import { AppLovinCountAggregate } from './app-lovin-count-aggregate.output';
import { AppLovinMinAggregate } from './app-lovin-min-aggregate.output';
import { AppLovinMaxAggregate } from './app-lovin-max-aggregate.output';

@ObjectType()
export class AppLovinGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    alias!: string;

    @Field(() => String, {nullable:false})
    adUnitId!: string;

    @Field(() => AppLovingAdType, {nullable:false})
    type!: `${AppLovingAdType}`;

    @Field(() => AppLovinPosition, {nullable:false})
    position!: `${AppLovinPosition}`;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AppLovinCountAggregate, {nullable:true})
    _count?: AppLovinCountAggregate;

    @Field(() => AppLovinMinAggregate, {nullable:true})
    _min?: AppLovinMinAggregate;

    @Field(() => AppLovinMaxAggregate, {nullable:true})
    _max?: AppLovinMaxAggregate;
}
