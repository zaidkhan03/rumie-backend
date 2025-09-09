import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Image {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    order!: number | null;

    @Field(() => Boolean, {nullable:true})
    mainImage!: boolean | null;
}
