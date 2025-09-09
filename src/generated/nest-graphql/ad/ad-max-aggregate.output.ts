import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdType } from '../prisma/ad-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AdType, {nullable:true})
    type?: `${AdType}`;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    advertiserName?: string;

    @Field(() => String, {nullable:true})
    advertiserId?: string;

    @Field(() => Int, {nullable:true})
    monthlyBudget?: number;

    @Field(() => Int, {nullable:true})
    priority?: number;
}
