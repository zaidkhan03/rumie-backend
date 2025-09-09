import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BannedWordsCategorySumAggregate {

    @Field(() => Int, {nullable:true})
    severity?: number;
}
