import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ImageObjectEqualityInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Boolean, {nullable:true})
    mainImage?: boolean;
}
