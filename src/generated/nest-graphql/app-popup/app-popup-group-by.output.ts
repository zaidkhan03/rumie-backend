import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EduSelectionListType } from '../prisma/edu-selection-list-type.enum';
import { AppPopupTemplate } from '../prisma/app-popup-template.enum';
import { AppPopupCountAggregate } from './app-popup-count-aggregate.output';
import { AppPopupAvgAggregate } from './app-popup-avg-aggregate.output';
import { AppPopupSumAggregate } from './app-popup-sum-aggregate.output';
import { AppPopupMinAggregate } from './app-popup-min-aggregate.output';
import { AppPopupMaxAggregate } from './app-popup-max-aggregate.output';

@ObjectType()
export class AppPopupGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    frequency!: number;

    @Field(() => EduSelectionListType, {nullable:false})
    selectionListType!: `${EduSelectionListType}`;

    @Field(() => AppPopupTemplate, {nullable:false})
    template!: `${AppPopupTemplate}`;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    ctaUrl!: string;

    @Field(() => String, {nullable:false})
    ctaText!: string;

    @Field(() => String, {nullable:false})
    couponCode!: string;

    @Field(() => Int, {nullable:false})
    delayInSeconds!: number;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AppPopupCountAggregate, {nullable:true})
    _count?: AppPopupCountAggregate;

    @Field(() => AppPopupAvgAggregate, {nullable:true})
    _avg?: AppPopupAvgAggregate;

    @Field(() => AppPopupSumAggregate, {nullable:true})
    _sum?: AppPopupSumAggregate;

    @Field(() => AppPopupMinAggregate, {nullable:true})
    _min?: AppPopupMinAggregate;

    @Field(() => AppPopupMaxAggregate, {nullable:true})
    _max?: AppPopupMaxAggregate;
}
