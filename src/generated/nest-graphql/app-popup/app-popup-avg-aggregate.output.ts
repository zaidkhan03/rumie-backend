import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AppPopupAvgAggregate {

    @Field(() => Float, {nullable:true})
    frequency?: number;

    @Field(() => Float, {nullable:true})
    delayInSeconds?: number;
}
