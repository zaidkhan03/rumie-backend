import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Sizes {

    @Field(() => String, {nullable:false})
    shoes!: string;

    @Field(() => String, {nullable:false})
    upperWear!: string;

    @Field(() => String, {nullable:false})
    lowerWear!: string;
}
