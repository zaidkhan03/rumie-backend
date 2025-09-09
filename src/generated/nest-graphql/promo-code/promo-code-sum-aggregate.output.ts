import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromoCodeSumAggregate {

    @Field(() => Int, {nullable:true})
    value?: number;

    @Field(() => Int, {nullable:true})
    usageLimit?: number;

    @Field(() => Int, {nullable:true})
    useCount?: number;
}
