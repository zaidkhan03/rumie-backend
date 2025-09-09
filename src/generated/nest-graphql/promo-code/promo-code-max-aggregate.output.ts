import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PromoCodeType } from '../prisma/promo-code-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromoCodeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => PromoCodeType, {nullable:true})
    type?: `${PromoCodeType}`;

    @Field(() => Int, {nullable:true})
    value?: number;

    @Field(() => Int, {nullable:true})
    usageLimit?: number;

    @Field(() => Int, {nullable:true})
    useCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
