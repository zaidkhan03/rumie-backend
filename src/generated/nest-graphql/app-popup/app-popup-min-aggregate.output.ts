import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EduSelectionListType } from '../prisma/edu-selection-list-type.enum';
import { AppPopupTemplate } from '../prisma/app-popup-template.enum';

@ObjectType()
export class AppPopupMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    frequency?: number;

    @Field(() => EduSelectionListType, {nullable:true})
    selectionListType?: `${EduSelectionListType}`;

    @Field(() => AppPopupTemplate, {nullable:true})
    template?: `${AppPopupTemplate}`;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    ctaUrl?: string;

    @Field(() => String, {nullable:true})
    ctaText?: string;

    @Field(() => String, {nullable:true})
    couponCode?: string;

    @Field(() => Int, {nullable:true})
    delayInSeconds?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
