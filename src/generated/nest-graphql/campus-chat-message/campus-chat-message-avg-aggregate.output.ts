import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CampusChatMessageAvgAggregate {

    @Field(() => Float, {nullable:true})
    reportCount?: number;
}
