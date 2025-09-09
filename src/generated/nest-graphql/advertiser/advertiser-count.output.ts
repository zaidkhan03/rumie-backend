import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdvertiserCount {

    @Field(() => Int, {nullable:false})
    ads?: number;
}
