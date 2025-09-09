import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EduInstituteCount {

    @Field(() => Int, {nullable:false})
    students?: number;

    @Field(() => Int, {nullable:false})
    campusChats?: number;

    @Field(() => Int, {nullable:false})
    productListings?: number;
}
