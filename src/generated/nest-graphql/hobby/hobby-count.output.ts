import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HobbyCount {

    @Field(() => Int, {nullable:false})
    users?: number;
}
