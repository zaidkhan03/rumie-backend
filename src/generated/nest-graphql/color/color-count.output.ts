import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ColorCount {

    @Field(() => Int, {nullable:false})
    ProductListing?: number;
}
